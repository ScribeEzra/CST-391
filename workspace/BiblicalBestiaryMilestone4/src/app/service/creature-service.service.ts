import { Injectable } from '@angular/core';
import * as exampledata from '../data/sample-creature-data.json';
import { Creature } from './../models/Creature';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatureServiceService {

	private host = "http://localhost:5000";
  		creatures: Creature[] = exampledata;
		constructor(private http: HttpClient) {
			this.createCreatures();
		}

		private createCreatures(): void {
				exampledata.forEach((data: any) => {
					const creature = new Creature(data.id, data.name, data.description, data.hp, data.atk, data.def, data.unique);
					this.creatures.push(creature);
				});
			}
			public getCreatures(callback: (creatures: Creature[]) => void): void {
				this.http.get<Creature[]>(this.host + "/creatures").
				subscribe((creatures:Creature[]) => {
					callback(creatures)
				});
			}
			public getCreature(id: number): Creature | undefined {
				const creature = this.creatures.find((a) => a.Id === id);
		
				if (creature) {
					return new Creature(creature.Id, creature.Name, creature.Description, creature.hp, creature.Atk, creature.Def, creature.Unique);
				}
		
				return undefined;
			}
			public createCreature(creature: Creature, callback: () => void): void {
				this.creatures.push(creature);
				this.http.post<Creature>(this.host + "/creatures", creature)
				.subscribe((data) => {
					callback();
				});
			}
			public updateCreature(creature: Creature, callback: () => void): void {
				this.http.put<Creature>(this.host + "/creatures", creature)
				.subscribe((data) => {
					callback();
				});
			}
			public deleteCreature(id: number, callback: () => void): void {
				this.http.delete<Creature>(this.host + "/creatures/" + id)
				.subscribe((data) => {
					callback();
				});
			}
}
