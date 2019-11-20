FROM node:8 AS base

FROM base AS dependencies

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

FROM node:8 AS release

WORKDIR /usr/src/app

COPY --from=dependencies /usr/src/app/ .
