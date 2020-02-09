import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionListComponent } from './container/competition-list/competition-list.component';
const routes: Routes = [
  { path: 'competitions', component: CompetitionListComponent },
  // { path: 'competition/:id', component: CompetitionComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
