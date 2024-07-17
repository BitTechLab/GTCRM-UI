ENV_FILE := .env
ENV := $(shell cat $(ENV_FILE))
$(foreach var, $(ENV), $(eval $(var)))

PHP_CONTAINER = $(APP_NAME)-php

# Run local server
default:
	docker compose up

force-rebuild:
	docker compose up --build --force-recreate
	 
# Sync vendor directory from PHP container to the host
node-modules-sync:
	# rm -rf vendor
	docker cp $(PHP_CONTAINER):/var/www/node_modules ./
