# Utiliser l'image de base Node.js
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json (si existants)
COPY ./package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application dans le conteneur
COPY . .

# Exposer le port nécessaire (modifiez en fonction de votre application)
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "start"]


