#!/bin/bash

echo "RUN WITH SUDO"

apt install curl wget net-tools make sudo live-build -y
# If you have another user change it here.
usermod -aG sudo user

echo "Installation finished"
