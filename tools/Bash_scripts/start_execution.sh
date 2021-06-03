#!/bin/bash

folder=$1;

echo "*** Starting execution ***"

echo "*** Parsing files ... ***"

python3 '../tools/Python_scripts/parse_json.py' $folder; 

echo "*** Files parsed ***"



tasks='../debian-live-config/config/package-lists/tasks.json.list.chroot'

if [ -f "$tasks" ]; then
	echo "*** Configuring desktop ***"
	cp '../Basic_config/desktop.list.chrot' '../debian-live-config/config/package-lists/'
	if grep -q kde $tasks; then
  		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/startkde' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
	elif grep -q xfce $tasks; then
		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/xfce4-session' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
		cp '../Basic_config/xfce.utilities.list.chrot' '../debian-live-config/config/package-lists/'
	else
		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/gnome-session' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
		cp '../Basic_config/gnome.utilities.list.chrot' '../debian-live-config/config/package-lists/'
	fi
fi 

echo '*** Coping basic configuration ***'
cp '../Basic_config/00-important.list.chroot ../debian-live-config/config/package-lists/'
cp '../Basic_config/00-required.list.chroot' '../debian-live-config/config/package-lists/'
cp '../Basic_config/basic.list.chroot' '../debian-live-config/config/package-lists/'
cp '../Basic_config/installet.list.binary' '../debian-live-config/config/package-lists/'
echo '*** End basic configuration ***'

#echo '*** Ensuring system has all needed packages ***'
#dlc='../debian-live-config/'
#cd $dlc;
#make install_buildenv;
#echo '*** Intallation finished ***'


echo "*** Clean directory ***"
make clean;
echo "*** Directory cleaned ***"
echo "*** Building directory ***"
make build;
echo "*** Building finished ***"