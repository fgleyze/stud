# Stage 1: Build
FROM node:14-alpine AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Build de l'application React
RUN npm run build

# Stage 2: Run
FROM nginx:alpine

# Copier le build depuis le stage précédent
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration Nginx personnalisée (si nécessaire)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]

