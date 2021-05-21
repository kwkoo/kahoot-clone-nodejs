FROM node:16-alpine3.11
LABEL \
  maintainer="kin.wai.koo@gmail.com" \
  io.k8s.description="Quiz app" \
  io.openshift.expose-services="8080:http" \
  org.opencontainers.image.source="https://github.com/kwkoo/kahoot-clone-nodejs"

COPY --chown=1001:0 src/ /usr/app/

WORKDIR /usr/app

RUN \
  set -x \
  && \
  npm install \
  && \
  chown -R 1001:0 /usr/app

USER 1001

EXPOSE 8080

ENTRYPOINT ["node"]

CMD ["server/server.js"]