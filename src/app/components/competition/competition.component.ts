import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../store/state/app.state';

import { isSpinnerShowing } from './../../store/selectors/spinner.selectors';
import { selectSelectedCompetition } from '../../store/selectors/competition.selectors';
import { GetCompetition } from './../../store/actions/competition.actions';
import { SpinnerShow } from './../../store/actions/spinner.actions';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  spinner: Observable<boolean>;
  competition$ = this.store.pipe(select(selectSelectedCompetition));
  competitionId;

  constructor(private store: Store<IAppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.spinner = this.store.pipe(select(isSpinnerShowing));
    this.competitionId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new SpinnerShow());
    this.store.dispatch(new GetCompetition(this.competitionId));
  }

  back() {
    this.router.navigate(['competitions']);
  }

  delete() {
  }
}
