#!/bin/bash

folder=$1;

echo "*** Starting execution ***"

echo "*** Parsing files ... ***"

python3 '../tools/Python_scripts/parse_json.py' $folder; 

echo "*** Files parsed ***"



tasks='../debian-live-config/config/package-lists/tasks.json.list.chroot'

if [ -f "$tasks" ]; then
	echo "*** Configuring desktop ***"

	if grep -q kde $tasks; then
  		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/startkde' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
	elif grep -q gnome $tasks; then
		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/gnome-session' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
	elif grep -q xfce $tasks; then
		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/xfce4-session' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
	else
		echo '#!/bin/bash
echo "I: running $0"
update-alternatives --set x-session-manager /usr/bin/gnome-session' > '../debian-live-config/config/hooks/normal/0425-update-session-manager-alternative.hook.chroot'
	fi
fi 






echo "*** Clean directory ***"
echo "*** Directory cleaned ***"

echo "*** Building directory ***"
echo "*** Building finished ***"