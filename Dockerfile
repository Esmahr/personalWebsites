# İlk aşama: Uygulamayı derle
FROM node:16-alpine AS build
WORKDIR /app
EXPOSE 80
COPY . .
RUN npm install
RUN npm run build

# İkinci aşama: Nginx ile uygulamayı sun
FROM nginx:alpine
COPY --from=build /app/dist/cv-websites/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf