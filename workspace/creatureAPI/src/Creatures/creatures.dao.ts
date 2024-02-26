import { OkPacket } from "mysql";
import { execute } from "../Services/mysql.connector";
import { Creature } from "./creatures.model";
import { creatureQueries } from './creatures.queries';


export const readCreatures = async () => {
    return execute<Creature[]>(creatureQueries.readCreatures, []);
};

export const readCreaturesByDescriptionSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Creature[]>(creatureQueries.readCreaturesByDescriptionSearch, [search]);
};

export const readCreaturesByCreatureId = async (creatureId: number) => {
    return execute<Creature[]>(creatureQueries.readCreaturesByCreatureId, [creatureId]);
};

export const createCreature = async (creature: Creature) => {
    return execute<OkPacket>(creatureQueries.createCreature,
        [creature.creatureName, creature.description, creature.hp, creature.atk, creature.def, creature.unique]);
};

export const updateCreature = async (creature: Creature) => {
    return execute<OkPacket>(creatureQueries.updateCreature,
        [creature.creatureName, creature.description, creature.hp, creature.atk, creature.def, creature.unique, creature.creatureId]);
};

export const deleteCreature = async (creatureId: number) => {
    return execute<OkPacket>(creatureQueries.deleteCreature, [creatureId]);
};

