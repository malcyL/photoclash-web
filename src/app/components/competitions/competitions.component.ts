import { GetCompetitions } from './../../store/actions/competition.actions';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectCompetitionList } from '../../store/selectors/competition.selectors';
import { Router } from '@angular/router';
import { ICompetition } from './../../models/competition.interface';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  competitions$ = this.store.pipe(select(selectCompetitionList));

  @Output()
  competitionSelected: EventEmitter<string> = new EventEmitter();

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetCompetitions());
  }

  navigateToCompetition(id: string) {
    this.router.navigate(['competition', id]);
  }
}
