# 基础 image
FROM node:16

# 设置项目目录
WORKDIR /app

# 安装项目依赖
COPY package.json .
RUN npm install

EXPOSE 3000
# 运行
CMD ["npm", "run", "serve"]