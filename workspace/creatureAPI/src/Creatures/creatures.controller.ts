import { Request, RequestHandler, Response } from 'express';
import { Creature } from './creatures.model';
import * as CreatureDao from '../Creatures/creatures.dao';
import { OkPacket } from 'mysql';

export const readCreatures: RequestHandler = async (req: Request, res: Response) => {
    try {
        let creatures;
        let creatureId = parseInt(req.query.creatureId as string);

        console.log('creatureId', creatureId);
        if (Number.isNaN(creatureId)) {
            creatures = await CreatureDao.readCreatures();
        } else {
            creatures = await CreatureDao.readCreaturesByCreatureId(creatureId);
        }
        res.status(200).json(
            creatures
        );
    } catch (error) {
        console.error('[creatures.controller][readCreatures][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching creatures'
        });
    }
};


export const readCreaturesByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const creatures = await CreatureDao.readCreaturesByDescriptionSearch('%' + req.params.search + '%');

        res.status(200).json(creatures);
    } catch (error) {
        console.error('[creatures.controller][readCreatures][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching creatures'
        });
    }
};

export const createCreature: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CreatureDao.createCreature(req.body);

        console.log('req.body', req.body);
        console.log('creature', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[creatures.controller][createCreature][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing creatures'
        });
    }
};

export const updateCreature: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CreatureDao.updateCreature(req.body);

        console.log('req.body', req.body);
        console.log('creature', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[creatures.controller][updateCreature][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing creatures'
        });
    }
};

export const deleteCreature: RequestHandler = async (req: Request, res: Response) => {
    try {
        let creatureId = parseInt(req.params.creatureId as string);
        console.log('creatureId', creatureId);

        if (!Number.isNaN(creatureId)) {
            const response = await CreatureDao.deleteCreature(creatureId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for creatureId");
        }

    } catch (error) {
        console.error('[creature.controller][deleteCreature][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting creatures'
        });
    }
};





