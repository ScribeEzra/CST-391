import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCreatureComponent } from './create-creature/create-creature.component';
import { DeleteCreatureComponent } from './delete-creature/delete-creature.component';
import { DisplayCreatureComponent } from './display-creature/display-creature.component';
import { EditCreatureComponent } from './edit-creature/edit-creature.component';
import { ListCreaturesComponent } from './list-creatures/list-creatures.component';

const routes: Routes = [
	{ path: 'create', component: CreateCreatureComponent },
	{ path: 'delete/:artist/:id', component: DeleteCreatureComponent },
	{ path: 'display/:id', component: DisplayCreatureComponent },
	{ path: 'edit/:artist/:id', component: EditCreatureComponent },
	{ path: 'list-artists', component: ListCreaturesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
