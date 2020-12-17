#!/bin/bash

# Should be called from repo root
# The list of files specified will be encrypted using ~/.microservices-dev
# Example use: scripts/env_encrypt.sh .env .docker_auth.json

# This file should be generic enough to work with all projects

# Written and maintained by Jolene Engo <jolene@ridecell.com>
# Last modified 2017-11-02

if [ ! -f ${HOME}/.microservices-dev ]; then
	echo "~/.microservices-dev is missing"
	exit 1
fi


EXPECTED_CHECKSUM="d42b86cd8e956947bfe399d517239060ac92352c"
# Verify key matches the expected checksum, otherwise it was created incorrectly
if [ ${EXPECTED_CHECKSUM} != $(cat ${HOME}/.microservices-dev | tr -d "\n" | shasum | awk '{print $1}' | tr -d "\n") ]; then
	echo "~/.microservices-dev secret key does not match expected checksum."
	echo "Verify that this file was created correctly, it should not have any line endings"
	exit 2
fi

encrypt()
{
	if [ ! -f "$1" ]
	then
		printf "%-60s   [ \033[31mNot found  \033[0m]\n" "$1"        
		return 0
	fi

	if [ ! -f "$2" ]
	then
		 printf "%-60s   [ \033[93mSkipped - No key \033[0m]\n" "$1"
		 return 0
	fi
	
	decrypted=$(openssl aes-256-cbc -d -md md5 -a -in $1.encrypted -pass file:$2 2>/dev/null)
	new_file=$(cat $1)

	if [ "$decrypted" != "$new_file" ]
	then
		printf "%-60s   [ \033[92mEncrypting\033[0m ]\n" "$1"
		openssl aes-256-cbc -a -md md5 -in $1 -out $1.encrypted -pass file:$2
	else
		printf "%-60s   [ No changes ]\n" "$1"
	fi
}

for file in "$@"
do
	encrypt ${file} ${HOME}/.microservices-dev
done

# Special type owned by devops
test -f kubernetes/imagepull-secrets.yml && encrypt kubernetes/imagepull-secrets.yml ${HOME}/.vault_password_prod

if [ -d "kubernetes/dev" ]
then
	for file in $(find kubernetes/dev -name \*secrets.yml); do
		encrypt ${file} ${HOME}/.microservices-dev
	done
fi

if [ -d "kubernetes/sandbox" ]
then
	for file in $(find kubernetes/sandbox -name \*secrets.yml); do
		encrypt ${file} ${HOME}/.vault_password_prod
	done
fi

if [ -d "kubernetes/prod" ]
then
	for file in $(find kubernetes/prod -name \*secrets.yml); do
		encrypt ${file} ${HOME}/.vault_password_prod
	done
fi
