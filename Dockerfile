FROM node:12-alpine AS builder

RUN apk add --no-cache g++ gcc make python

USER node
WORKDIR /tmp
COPY --chown=node:node . .

RUN npm install --no-audit && \
  npm run build

FROM nginx:1.17-alpine

ARG GIT_COMMIT
ARG VERSION

LABEL maintainer="Jeremie Rodriguez <contact@jeremierodriguez.com> (https://github.com/jeremiergz)" \
  description="My personal website about my journey as a developer, powered by Gatsby." \
  git_commit=${GIT_COMMIT} \
  version=${VERSION}

WORKDIR /usr/share/nginx/html
COPY --from=builder --chown=nginx /tmp/public .

EXPOSE 80
