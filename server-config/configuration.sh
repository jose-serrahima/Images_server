#!/bin/bash

if  [ ! -d ~/bin ]; then
	echo "bin folder created at ~/bin"
	mkdir ~/bin
fi

if  [ ! -d ~/tmp ]; then
	echo "tmp folder created at ~/tmp"
	mkdir ~/tmp
fi

# Download node 14.16.1
if [ ! -d ~/bin/node ]; then
	echo "Downloading Node"
	wget https://nodejs.org/dist/v14.16.1/node-v14.16.1-linux-x64.tar.xz -P ~/tmp
	tar -xf ~/tmp/node-v14.16.1-linux-x64.tar.xz -C ~/tmp/
	mv ~/tmp/node-v14.16.1-linux-x64 ~/bin/node
	rm -rf ~/tmp
fi

echo "tmp folder deleted"

# Check if .profile exist
if [ ! -f ~/.profile ]; then
	touch ~/.profile
fi

# Check if .profile contains node route
echo "Adding node route to the path"
path=~/bin/node/bin
file=~/.profile
echo $PATH | grep -q "\(^\|:\)$path\(:\|/\{0,1\}$\)" || echo "PATH=\$PATH:$path" >> "$file";


echo "Installing Angular/cli"
npm install -g @angular/cli

echo "Remember reloading your ~/.profile in order to get system works"
