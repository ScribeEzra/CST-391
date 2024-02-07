import { Injectable } from '@angular/core';
import * as exampledata from '../data/sample-creature-data.json';
import { Creature } from './../models/creature.model';

@Injectable({ providedIn: 'root' })
export class CreaturesServiceService {

  creatures: Creature[] = exampledata;

  public getCreature(): Creature[] {
    let creatures: Creature[] = [];
    let creatureSet = new Set<string>();

    this.creatures.forEach(a => creatureSet.add(a.creature));

    creatureSet.forEach(a => creatures.push({creature: a}))
    return creatures;
  }

  public getCreatures(): Creature[] {
    // Return the list of Albums
    return this.creature;
  }

  public createCreature(creature: Creature): number {
    // Add a new Album to the list of Albums
    this.creature.push(creature);
    return 1;
  }

  public updateCreature(creature: Creature): number {
    // Search for the Album in the list of Albums and replace it in the list
    for (let i = 0; i < this.creatures.length; ++i) {
      if (this.creatures[i].creatureId == creature.creatureId) {
        this.creature.splice(i, 1, creature);
        return 0;
      }
    }
    return -1;
  }

  public deleteCreature(id: number): number {
    // Search for the Album in the list of Albums and delete from the list
    for (let i = 0; i < this.creatures.length; ++i) {
      if (this.creatures[i].creatureId == id) {
        this.creatures.splice(i, 1);
        return 0;
      }
    }
    return -1;
  }
}
