lc = $(subst A,a,$(subst B,b,$(subst C,c,$(subst D,d,$(subst E,e,$(subst F,f,$(subst G,g,$(subst H,h,$(subst I,i,$(subst J,j,$(subst K,k,$(subst L,l,$(subst M,m,$(subst N,n,$(subst O,o,$(subst P,p,$(subst Q,q,$(subst R,r,$(subst S,s,$(subst T,t,$(subst U,u,$(subst V,v,$(subst W,w,$(subst X,x,$(subst Y,y,$(subst Z,z,$1))))))))))))))))))))))))))

ENV_FILE := .env
ENV := $(shell cat $(ENV_FILE))
$(foreach var, $(ENV), $(eval $(var)))

APP_NAME_LOWER_CASE = $(call lc,$(APP_NAME))
CONTAINER_NAME = $(APP_NAME_LOWER_CASE)-ui

# Run local server
default:
	docker compose up

force-rebuild:
	docker compose up --build --force-recreate
	 
# Sync vendor directory from PHP container to the host
node-modules-sync:
	docker cp $(CONTAINER_NAME):/var/www/node_modules ./
