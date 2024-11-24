# Utiliser une image Node.js officielle comme image de base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier uniquement package.json et package-lock.json (si présent) pour optimiser le cache
COPY package*.json ./

# Installer les dépendances à partir de package.json
RUN npm install

# Copier tout le reste des fichiers du projet dans le conteneur
COPY . .

# Exposer le port 5000 à l'extérieur du conteneur
EXPOSE 5000

# Définir la commande pour démarrer l'application
CMD ["npm", "start"]

