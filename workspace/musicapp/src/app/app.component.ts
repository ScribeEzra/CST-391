import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Music Collection';
  version = 1.0;
  displayVersion() {
    window.alert("Version " + this.version);
  };
}