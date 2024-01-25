import { Router } from 'express';
import *as albumsController from './albums.controller';

const router = Router();
router
    .route('/albums')
    .get(albumsController.readAlbums);

export default router;