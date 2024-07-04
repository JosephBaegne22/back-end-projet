import { Request, Response } from 'express';
import carService from '../services/carService';
import { Router } from 'express';

const router = Router();

router.post('/start', (req: Request, res: Response) => {
    try {
        carService.start();
        res.send('Course démarrée');
    } catch (error) {
        res.status(500).send('Erreur lors du démarrage de la course');
    }
});

router.post('/stop', (req: Request, res: Response) => {
    try {
        carService.stop();
        res.send('Course arrêtée');
    } catch (error) {
        res.status(500).send('Erreur lors de l\'arrêt de la course');
    }
});

router.post('/control', (req: Request, res: Response) => {
    const { direction, speed } = req.body;
    try {
        carService.control(direction, speed);
        res.send(`Car controlled: direction=${direction}, speed=${speed}`);
    } catch (error) {
        res.status(500).send('Erreur lors du contrôle de la voiture');
    }
});

export default router;
