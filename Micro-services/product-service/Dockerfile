# Utiliser une image officielle Node.js comme image de base
FROM node:16

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json (si disponible)
COPY ./package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans l'image
COPY . .

# Exposer le port sur lequel le service écoutera
EXPOSE 5001

# Démarrer l'application Node.js
CMD ["npm", "start"]
