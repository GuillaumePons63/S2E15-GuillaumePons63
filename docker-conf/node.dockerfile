FROM node:current-alpine3.16

COPY ./vue-admin /var/www/html/vue-admin

WORKDIR /var/www/html/vue-admin

RUN npm install

ENTRYPOINT ["npm", "run", "dev", "--host", "0.0.0.0"]
