import express from 'express';
import carController from './controllers/carController';
import carService from './services/carService';

// Configuration de l'application Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Routes de l'application
app.use('/api', carController);

// Démarrer le serveur HTTP
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});

// Initialisation du service de contrôle de la voiture
carService.connect();
