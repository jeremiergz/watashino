FROM nginx:1-alpine

ARG GIT_COMMIT
ARG VERSION

LABEL description="My personal website about my journey as a developer, powered by Gatsby." \
  git_commit="${GIT_COMMIT}" \
  maintainer="Jeremie Rodriguez <contact@jeremierodriguez.com> (https://github.com/jeremiergz)" \
  version="${VERSION}"

WORKDIR /usr/share/nginx/html
COPY --chown=nginx ./public/ .
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
