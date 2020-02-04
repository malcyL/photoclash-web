import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { GetCompetitions } from './store/actions/competition.actions';
import { selectCompetitionList } from './store/selectors/competition.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'photoclash-web';

  competitionList = this.store.pipe(select(selectCompetitionList));

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}
}
