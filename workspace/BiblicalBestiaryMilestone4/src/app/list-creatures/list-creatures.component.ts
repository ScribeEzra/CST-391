import { Component, OnInit, Input } from '@angular/core';

import { CreatureServiceService} from '../service/creature-service.service';

import { Creature } from '../models/Creature';


@Component({
	selector: 'app-list-albums',
	templateUrl: './list-creatures.component.html',
	styleUrls: ['./list-creatures.component.css']
})

export class ListCreaturesComponent implements OnInit {

	@Input() creature: Creature | null = null;
	creatures: Creature[] = [];
	selectedCreature: Creature | null = null;

	constructor(private service: CreatureServiceService) { }

	ngOnInit() {
		if (this.creature) {
			this.creature = this.service.getCreatures((creatures: Creature[]) => this.creatures = creatures);
		}
	}

	public onSelectCreature(creature: Creature) {
		console.log(creature.Name);
		this.selectedCreature = creature;
	}
}