FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli && \
    npm install

COPY .. .

RUN ng build --configuration production

FROM nginx:alpine

# !! /browser !! Angular 17 changes !!
COPY --from=build /usr/src/app/dist/frontend/browser /usr/share/nginx/html

# or? COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
