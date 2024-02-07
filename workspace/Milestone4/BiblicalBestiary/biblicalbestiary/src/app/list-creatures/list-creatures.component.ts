import { Component, Input, OnInit } from '@angular/core';
import { Creature } from '../models/creature.model';
import { CreaturesServiceService } from '../service/creatures-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-creatures',
  standalone: true,
  imports: [],
  templateUrl: './list-creatures.component.html',
  styleUrl: './list-creatures.component.css'
})
export class ListCreaturesComponent implements OnInit {
  [x: string]: any;

  selectedCreature: Creature | null = null;
  @Input() creature!: Creature;
  creatures = this.service.getCreatures(this.creature!.creature);
  

  constructor(private route: ActivatedRoute, private service: CreaturesServiceService) 
  {

  };

  ngOnInit()
  {
    this.route.queryParams.subscribe((params: any) => {
      console.log("Getting data....");
      this.creatures = this.service.getCreatures();
      this.selectedCreature = null;
    });
  };

  onSelectCreature(creature: Creature) {
    this.selectedCreature = creature;
}
  
}
