import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Music Collection';
  version = 1.0;
  displayVersion() {
    window.alert("Version " + this.version);
  }
  displayArtistList() {
    window.alert("Display List Here");
  }
}
