import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { AngularTokenService } from 'angular-token';

const routes: Routes = [
  { path: '', redirectTo: '/competitions', pathMatch: 'full' },
  { path: 'competitions', component: CompetitionsComponent, canActivate: [AngularTokenService] },
  { path: 'login', component: AuthComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
