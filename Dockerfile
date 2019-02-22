FROM node:8.15.0-jessie 

RUN npm install gulp-cli -g

WORKDIR /opt/portal/app

COPY . .

RUN npm install

RUN gulp dist

EXPOSE 3030

CMD ["npm", "start"]