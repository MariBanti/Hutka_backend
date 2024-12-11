# React Dockerfile
FROM node:18

# Установим приложение
WORKDIR /app
COPY . .

# Установим зависимости и соберем React
RUN npm install && npm run build

# Запустим React на веб-сервере
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
