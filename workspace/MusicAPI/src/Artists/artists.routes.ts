import { Request, Response, Router } from 'express';
import *as artistsController from './artists.controller';

const router = Router();
router
    .route('/artists')
    .get(artistsController.readArtists);

export default router;