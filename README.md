# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


## Al clonar el proyecto
```
npm install
cp .env.example .env.development
cp .env.example .env.production
```

## No me gusta de la libreria Naive

No puedo personalizar muy comodamente las columnas del componente datatable


## Deploy en Nelify
el archivo _redirects es para que el router funcione correctamente

## Docker prod
docker build -t crud-vue-jwt .

docker run -p 5725:8080 crud-vue-jwt

http://localhost:5725

## Docker dev

### primera vez y cada vez que se modifique docker-compose.yml
docker-compose up --build --no-recreate -d

### A partir de la segunda vez, podemos usar
docker-compose up -d
docker exec -it crud-vue-jwt sh
npm i 
npm run dev


https://dev.to/ysmnikhil/how-to-build-with-react-or-vue-with-vite-and-docker-1a3l
