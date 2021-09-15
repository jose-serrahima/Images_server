#!/bin/bash

echo "RUN WITH ROOT"

apt install curl wget net-tools sudo live-build make build-essential wget git unzip colordiff apt-transport-https rename ovmf rsync python3-venv gnupg -y;
# If you have another user change it here.
usermod -aG sudo user;
echo "user  ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers;

echo "Installation finished"
