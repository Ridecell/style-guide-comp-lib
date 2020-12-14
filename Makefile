env_encrypt:
	PROJECT=${PROJECT} scripts/env_encrypt.sh .npmrc config.json

env_decrypt:
	PROJECT=${PROJECT} scripts/env_decrypt.sh .npmrc config.json
