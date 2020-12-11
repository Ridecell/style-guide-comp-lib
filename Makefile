env_encrypt:
	PROJECT=${PROJECT} scripts/env_encrypt.sh .npmrc

env_decrypt:
	PROJECT=${PROJECT} scripts/env_decrypt.sh .npmrc
