FROM node:16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# 安装并缓存应用程序依赖项
COPY package.json /app/package.json
RUN npm install

# start app
CMD ["npm", "run", "serve"]