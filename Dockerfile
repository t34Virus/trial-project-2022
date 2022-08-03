FROM node:10.5

RUN mkdir -p /usr/app/

WORKDIR /usr/app/

COPY ./trial-project-2022/package.json .

RUN npm install

COPY ./trial-project-2022/ .

RUN npm install -g @angular/cli

WORKDIR /usr/app/trial-project-2022

EXPOSE 3000