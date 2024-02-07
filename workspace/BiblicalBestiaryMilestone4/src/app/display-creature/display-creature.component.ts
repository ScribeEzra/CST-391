import { Component, OnInit, Input } from '@angular/core';
import { Creature } from '../models/Creature';

@Component({
	selector: 'app-display-album',
	templateUrl: './display-creature.component.html',
	styleUrls: ['./display-creature.component.css'],
})
export class DisplayCreatureComponent implements OnInit {
	@Input() creature: Creature | null = null;

	constructor() { }

	ngOnInit() { }
}