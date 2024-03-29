// Angular Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// NGRX Imports
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

// Angular Material Imports
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material';

// Other Library Imports
import { AngularTokenModule } from 'angular-token';

// Angular Project Import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { appReducers } from './store/reducers/app.reducers';

// Authentication Imports
import { AuthEffects } from './store/effects/auth.effects';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutMenuButtonComponent } from './components/auth/logout-menu-button/logout-menu-button.component';
import { OauthCallbackComponent } from './components/auth/oauth-callback/oauth-callback.component';

// Competitions Imports
import { CompetitionEffects } from './store/effects/competition.effects';
import { CompetitionService } from './services/competition.service';
import { CompetitionsComponent, AddCompetitionDialogComponent } from './components/competitions/competitions.component';

// Snackbar Imports
import { SnackbarEffects } from './store/effects/snackbar.effects';

import { CompetitionComponent } from './components/competition/competition.component';
import { EntriesComponent } from './components/entries/entries.component';

@NgModule({
  declarations: [
    AddCompetitionDialogComponent,
    AppComponent,
    AuthComponent,
    CompetitionsComponent,
    LoginComponent,
    LogoutMenuButtonComponent,
    OauthCallbackComponent,
    CompetitionComponent,
    EntriesComponent
  ],
  imports: [
    AppRoutingModule,
    // TODO: Angular token config could come from a file
    AngularTokenModule.forRoot({
      apiBase: `${environment.angularToken.apiBase}`,
      signInStoredUrlStorageKey: 'originalUrl',
      signInRedirect: '/login',
      oAuthBase: `${environment.angularToken.oauthBase}`,
      oAuthWindowType: 'sameWindow',
    }),
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([AuthEffects, CompetitionEffects, SnackbarEffects]),
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  entryComponents: [AddCompetitionDialogComponent],
  providers: [AngularTokenModule, CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
