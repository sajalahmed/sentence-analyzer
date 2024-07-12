FROM node:20-alpine

# Create app directory
WORKDIR /srv/www/app

ENV NODE_ENV development
ENV PORT 9090

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 9090

CMD ["npm", "run", "dev"]