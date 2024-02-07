import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Biblical Bestiary';
  version = "4.0";

  constructor(private router: Router)
  {

  }

  public displayVersion()
  {
    alert(this.title + " Version: " + this.version);
  }

  public displayCreatureList()
  {
    this.router.navigate(['list-creatures'], { queryParams: { data: new Date()} });
  }
}
