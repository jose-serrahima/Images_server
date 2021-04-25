#!/bin/bash

if  [ ! -d ~/bin ]; then
	mkdir ~/bin
fi

if  [ ! -d ~/tmp ]; then
	mkdir ~/tmp
fi

# Download node 14.16.1
wget https://nodejs.org/dist/v14.16.1/node-v14.16.1-linux-x64.tar.xz -P ~/tmp
tar -xf ~/tmp/node-v14.16.1-linux-x64.tar.xz -C ~/tmp/
mv ~/tmp/node-v14.16.1-linux-x64 ~/bin/node
rm -rf ~/tmp

# Check if .profile exist
if [ ! -f ~/.profile ]; then
	touch ~/.profile
fi

# Check if .profile contains node route
path=~/bin/node/bin
file=~/.profile
echo $PATH | grep -q "\(^\|:\)$path\(:\|/\{0,1\}$\)" || echo "PATH=\$PATH:$path" >> ".profile"; source "$file"

source ~/.profile