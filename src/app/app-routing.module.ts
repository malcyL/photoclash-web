import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { AngularTokenService } from 'angular-token';
import { OauthCallbackComponent } from './components/auth/oauth-callback/oauth-callback.component';

const routes: Routes = [
  { path: '', redirectTo: '/competitions', pathMatch: 'full' },
  { path: 'competitions', component: CompetitionsComponent, canActivate: [AngularTokenService] },
  { path: 'competitions/:id', component: CompetitionComponent, canActivate: [AngularTokenService] },
  { path: 'login', component: AuthComponent },
  { path: 'oauth_callback/google_oauth2/callback', component: OauthCallbackComponent },
  { path: 'oauth_callback/google_oauth2', component: OauthCallbackComponent },
  { path: 'oauth_callback', component: OauthCallbackComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
