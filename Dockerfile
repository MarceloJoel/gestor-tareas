# Imagen de Node compatible con Angular 22 (requiere Node >= 22.22.3 o >= 24.15.0)
FROM node:24-alpine

WORKDIR /app

ENV NG_CLI_ANALYTICS=false

# Copiamos primero los manifiestos para aprovechar la cache de capas de Docker
COPY package*.json ./

# Instalamos dependencias (incluye @angular/cli localmente, no hace falta instalarlo
# en la máquina anfitriona)
RUN npm install

# Copiamos el resto del código fuente
COPY . .

EXPOSE 4200

# Levantamos el servidor de desarrollo escuchando en todas las interfaces
# para que sea accesible desde fuera del contenedor (localhost:4200)
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
