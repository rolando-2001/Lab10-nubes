FROM node:18-alpine

# Crear el directorio de la aplicación y dar los permisos correctos
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copiar los archivos de package.json e instalar dependencias
COPY --chown=node:node package*.json ./

USER node

RUN npm install

# Copiar el resto de la aplicación, incluyendo la carpeta src
COPY --chown=node:node . .

# Exponer el puerto
EXPOSE 8000

# Ejecutar la aplicación usando la ruta correcta al archivo src/index.js
CMD ["nodemon", "./src/index.js"]
