import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Biblical Bestiary';
  version = 1.4
  displayVersion() {
    window.alert("version " + this.version);
  }
  displayCreatureList() {
    window.alert("display list here");
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  }
  constructor(private router: Router) {
    
  };
}
