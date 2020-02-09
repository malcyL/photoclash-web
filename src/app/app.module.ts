import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { AngularTokenModule } from 'angular-token';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from './store/reducers/app.reducers';
import { environment } from '../environments/environment';

import { CompetitionEffects } from './store/effects/competition.effects';
import { CompetitionService } from './services/competition.service';
import { CompetitionListComponent as CompetitionListContainerComponent } from './container/competition-list/competition-list.component';
import { CompetitionListComponent } from './components/competition-list/competition-list.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';



@NgModule({
  declarations: [
    AppComponent,
    CompetitionListContainerComponent,
    CompetitionListComponent,
    CompetitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    AngularTokenModule.forRoot({
      // ...
    }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([CompetitionEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [AngularTokenModule, CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
