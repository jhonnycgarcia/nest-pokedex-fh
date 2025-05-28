<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
npm run db:start
```
5. Clonar el archivo __.env.template__ y renombrar la copia __.env__  
6. Llenar las variables de entorno definidas en el __.env__
7. Ejecutar la aplicación en dev:
```
yarn start:dev
```
1. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack utilizado
- MongoDB
- Nest
- https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490

## Build
```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build -d
```

## Run
docker compose -f docker-compose.prod.yaml --env-file .env.prod up -d

## Nota
Por defecto, __docker-compose__ usa el archivo ```.env```, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```
docker compose -f docker-compose.prod.yaml up --build
```

## Build para produccion
1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
