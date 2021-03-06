#!/bin/bash

folder=$1;
iso_type=$2;

echo "*** Starting execution ***"

echo "*** Parsing files ... ***"

python3 '../tools/Python_scripts/parse_json.py' $folder; 

echo "*** Files parsed ***"

tasks='../debian-live-config/config/package-lists/tasks.json.list.chroot'
kde='../debian-live-config/config/package-lists/kde.json.list.chroot'
xfce='../debian-live-config/config/package-lists/xfce.json.list.chroot'

if [ -f "$tasks" ] || [ -f "$gnome" ] || [ -f "$kde" ] || [ -f "$xfce" ] ; then
	echo "*** Configuring desktop ***"
	cp '../tools/Basic_config/desktop.list.chroot' '../debian-live-config/config/package-lists/'
	if grep -q kde $tasks || grep -q plasma-desktop $kde; then
  		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/startkde' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
	elif grep -q xfce $tasks || grep -q xfce4 $xfce; then
		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/xfce4-session' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
		cp '../tools/Basic_config/xfce.utilities.list.chroot' '../debian-live-config/config/package-lists/'
	else
		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/gnome-session' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
		cp '../tools/Basic_config/gnome.utilities.list.chroot' '../debian-live-config/config/package-lists/'
	fi
fi 

echo '*** Coping basic configuration ***'
cp '../tools/Basic_config/00-important.list.chroot' '../debian-live-config/config/package-lists/'
cp '../tools/Basic_config/00-required.list.chroot' '../debian-live-config/config/package-lists/'
cp '../tools/Basic_config/basic.list.chroot' '../debian-live-config/config/package-lists/'
cp '../tools/Basic_config/installer.list.binary' '../debian-live-config/config/package-lists/'
cp '../tools/Basic_config/networtk.list.chroot' '../debian-live-config/config/package-lists/'
cp '../tools/Basic_config/system.list.chroot' '../debian-live-config/config/package-lists/'
cp '../tools/Basic_config/utility.list.chroot' '../debian-live-config/config/package-lists/'
echo '*** End basic configuration ***'


dlc='../debian-live-config/'
cd $dlc;

echo "*** Configuring iso type ***"
if [ $2 == 'iso' ]; then 
	sed -i 's/--binary-images iso-hybrid \\/--binary-images iso \\/' auto/config;
else 
	sed -i 's/--binary-images iso \\/--binary-images iso-hybrid \\/' auto/config;
fi
echo "*** End configuring iso type ***"

echo "*** Clean directory***"
sudo make clean;
echo "*** Directory cleaned ***"
echo "*** Building directory ***"
sudo make;
echo "*** Building finished ***"