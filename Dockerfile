ARG NODE_VERSION
ARG NPM_VERSION

FROM darkfidis/node-npm:${NODE_VERSION}-${NPM_VERSION} as npm-deps

WORKDIR /usr/src/app

COPY ./package*.json ./.npmrc ./

RUN npm config set -g production false

RUN npm config set loglevel warn

RUN npm ci --prefer-offline --no-audit --no-optional

FROM npm-deps

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 4000

HEALTHCHECK CMD curl --fail http://localhost:4000/ping || exit 1

CMD ["node", "-r", "source-map-support/register", "dist/built/src/"]
