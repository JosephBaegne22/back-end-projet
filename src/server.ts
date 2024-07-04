import express from 'express';
import carController from './controllers/carController';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', carController);

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
