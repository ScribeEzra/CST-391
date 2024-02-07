import { Component, OnInit } from '@angular/core';
import { CreatureServiceService} from '../service/creature-service.service';
import { Creature } from '../models/Creature';

@Component({
	selector: 'app-create-album',
	templateUrl: './create-creature.component.html',
	styleUrls: ['./create-creature.component.css'],
})
export class CreateCreatureComponent implements OnInit {
	creature: Creature = new Creature(Math.floor(Math.random() * 1000000), '', '', 0, 0, 0, false);
	tracksRaw: string = '';
	wasSubmitted: boolean = false;

	constructor(private service: CreatureServiceService) { }

	ngOnInit() { }

	public onSubmit() {
		const status = this.service.createCreature(this.creature);
		console.log('The return from createCreature() was ' + status);
		this.wasSubmitted = true;
	}
}
