FROM node:16

# bind your app to the gateway IP
ENV HOST=0.0.0.0

# make the 'app' folder the current working directory
WORKDIR /app

# install vue
RUN npm install vue@latest

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json /app/package.json

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "serve" ]