FROM node:18-alpine

ARG NPM_USER
ARG NPM_PASS
ARG NPM_EMAIL
ARG NPM_REGISTRY

WORKDIR /var/www

COPY . .

RUN apk add --no-cache libc6-compat

RUN npm install -g npm-cli-login && npm-cli-login

RUN yarn install && yarn turbo run build --scope="web"

COPY .vuestorefrontcloud/docker/frontend/vue-storefront.sh /usr/local/bin/

RUN chmod a+x /usr/local/bin/vue-storefront.sh

ENTRYPOINT ["vue-storefront.sh"]

