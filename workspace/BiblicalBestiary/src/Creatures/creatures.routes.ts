import { Router } from 'express';
import *as creaturesController from './creatures.controller';

const router = Router();
router
    .route('/creatures')
    .get(creaturesController.readCreature);

export default router;