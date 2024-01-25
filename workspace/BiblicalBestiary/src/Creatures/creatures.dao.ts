import { OkPacket } from "mysql";
import { execute } from "../Services/mysql.connector";
import { Creature } from "./creatures.model";
import { creatureQueries } from './creatures.queries';


export const readCreatures = async () => {
    return execute<Creature[]>(creatureQueries.readCreatures, []);
};

export const readCreaturesById = async (id: number) => {
    return execute<Creature[]>(creatureQueries.readCreaturesById, [id]);
};

export const postCreature = async (creature: Creature) => {
    return execute<OkPacket>(creatureQueries.postCreature,
        [creature.id, creature.name, creature.description, creature.health, creature.attack, creature.defense, creature.unique]);
};

export const putCreature = async (creature: Creature) => {
    return execute<OkPacket>(creatureQueries.putCreature,
        [creature.id, creature.name, creature.description, creature.health, creature.attack, creature.defense, creature.unique]);
};

export const deleteCreature = async (id: number) => {
    return execute<OkPacket>(creatureQueries.deleteCreature, [id]);
};

