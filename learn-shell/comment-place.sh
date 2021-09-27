#!/bin/sh
#This lesson tests where comments are placed. You cannot place comments in between a command.
echo "Test one"
curl -v \
 # I wish this worked \
 http://oracle.com

echo "equivalent"
curl -v # I wish this worked http://oracle.com
