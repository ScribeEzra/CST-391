import { Component, Input } from '@angular/core';
import { Creature } from '../models/creature.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-display-creature',
  standalone: true,
  imports: [],
  templateUrl: './display-creature.component.html',
  styleUrl: './display-creature.component.css'
})
export class DisplayCreatureComponent {
  @Input() creature!: Creature | null;
  constructor() { 

  }

	ngOnInit() {

   }
}
