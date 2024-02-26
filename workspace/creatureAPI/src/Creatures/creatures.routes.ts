import { Router } from 'express';
import * as creaturesController from './creatures.controller';

const router = Router();

// Read all creatures
router.route('/creatures')
    .get(creaturesController.readCreatures)
    .post(creaturesController.createCreature); // Add route for creating a creature

// Read, update, and delete a specific creature by ID
router.route('/creatures/:creatureId')
    .get(creaturesController.readCreatures) // You can reuse the readCreatures controller for fetching a specific creature
    .put(creaturesController.updateCreature) // Add route for updating a creature
    .delete(creaturesController.deleteCreature); // Add route for deleting a creature

export default router;