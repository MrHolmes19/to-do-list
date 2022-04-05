FROM node:14.1.0-alpine

WORKDIR /app/frontend

COPY package.json package-lock.json ./

RUN npm install 
RUN npm install react-scripts@5.0.0 -g 

COPY . ./

#EXPOSE 3000