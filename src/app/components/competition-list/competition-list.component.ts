import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ICompetition } from './../../models/competition.interface';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  @Input()
  competitions: ICompetition[];
  @Output()
  competitionSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToCompetiton(id: string) {
    this.competitionSelected.emit(id);
  }
}
