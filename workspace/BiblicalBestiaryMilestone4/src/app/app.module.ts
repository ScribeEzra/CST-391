import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CreateCreatureComponent } from './create-creature/create-creature.component';
import { DeleteCreatureComponent } from './delete-creature/delete-creature.component';
import { DisplayCreatureComponent } from './display-creature/display-creature.component';
import { EditCreatureComponent } from './edit-creature/edit-creature.component';
import { ListCreaturesComponent } from './list-creatures/list-creatures.component';

@NgModule({
	declarations: [
		AppComponent,
  		CreateCreatureComponent,
  		DeleteCreatureComponent,
  		DisplayCreatureComponent,
  		EditCreatureComponent,
  		ListCreaturesComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule
	  ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
