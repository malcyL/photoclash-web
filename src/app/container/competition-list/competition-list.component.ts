import { GetCompetitions } from './../../store/actions/competition.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectCompetitionList } from '../../store/selectors/competition.selectors';
import { Router } from '@angular/router';

@Component({
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  competitions$ = this.store.pipe(select(selectCompetitionList));

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetCompetitions());
  }

  navigateToCompetition(id: string) {
    this.router.navigate(['competition', id]);
  }
}
