#!/bin/bash

#Rename host, add user and set user admin
hostnamectl set-hostname centfs
useradd -m -p CisXer5509 alsoszaa
usermod -aG wheel alsoszaa

#Install Samba and allow in firewall:
dnf install samba samba-client
systemctl enable --now {smb,nmb}
firewall-cmd --permanent --add-service=samba
firewall-cmd --reload

# make a folder if it doesn't exist
[ ! -d /var/www/html/ha-backup ] && mkdir -p /var/www/html/ha-backup

# append these lines at the end of the /etc/samba/smb.conf file
tee -a /etc/samba/smb.conf << EOF
[ha-backups]

comment = Home Assistant Backups
path = /var/www/html/ha-backup
browsable = yes
valid users = alsoszaa
read only = no
EOF

#provide ability for my user to access share:
username='alsoszaa'
(echo "CisXer5509"; sleep 1; echo "CisXer5509" ) | sudo smbpasswd -s -a $username