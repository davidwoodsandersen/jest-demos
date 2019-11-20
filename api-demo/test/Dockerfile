FROM node:8 AS base

FROM base AS dependencies

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./test /usr/src/app

COPY ./ops /usr/src/app/ops

RUN ["chmod", "+x", "/usr/src/app/ops/wait-for-it.sh"]

RUN npm install

FROM node:8 AS release

WORKDIR /usr/src/app

COPY --from=dependencies /usr/src/app .
