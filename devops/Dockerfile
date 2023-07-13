FROM node:20.4.0 AS BUILD_IMAGE

ARG app
ENV CONTAINER_PATH=/home/app
WORKDIR $CONTAINER_PATH

COPY ../src $CONTAINER_PATH/

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build


FROM node:20.4.0-alpine3.18

ENV CONTAINER_PATH=/home/app
WORKDIR $CONTAINER_PATH

COPY --from=BUILD_IMAGE /home/app/package.json ./
COPY --from=BUILD_IMAGE /home/app/dist ./dist

RUN npm install --only=prod
RUN npm install serve

EXPOSE 3000

ENTRYPOINT npx serve dist
