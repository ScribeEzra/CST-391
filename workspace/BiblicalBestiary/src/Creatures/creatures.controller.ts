import { Request, RequestHandler, Response } from 'express';
import { Creature } from './creatures.model';
import * as CreatureDao from './creatures.dao';
import { OkPacket } from 'mysql';

export const readCreature: RequestHandler = async (req: Request, res: Response) => {
    try {
        let creatures;
        let id = parseInt(req.query.id as string);

        console.log('id', id);
        if (Number.isNaN(id)) {
            creatures = await CreatureDao.readCreatures();
        } else {
            creatures = await CreatureDao.readCreaturesById(id);
        }
    } catch (error) {
        console.error('[creatures.controller][readCreatures][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching creatures'
        });
    }
};

export const postCreature: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CreatureDao.postCreature(req.body);

        console.log('req.body', req.body);
        console.log('creature', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[creature.controller][postCreature][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing creatures'
        });
    }
};

export const putCreature: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CreatureDao.putCreature(req.body);

        console.log('req.body', req.body);
        console.log('creature', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[creature.controller][putCreature][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing creatures'
        });
    }
};

export const deleteCreature: RequestHandler = async (req: Request, res: Response) => {
    try {
        let id = parseInt(req.params.id as string);
        console.log('id', id);

        if (!Number.isNaN(id)) {
            const response = await CreatureDao.deleteCreature(id);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for id");
        }

    } catch (error) {
        console.error('[creatures.controller][deleteCreature][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting creatures'
        });
    }
};

async function readCreatures(creatures: Creature[], res: Response<any, Record<string, any>>) {

};




