import { GetCompetitions, CreateCompetition } from './../../store/actions/competition.actions';
import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog, private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetCompetitions());
  }

  navigateToCompetition(id: string) {
    this.router.navigate(['competition', id]);
  }

  opanAddDialog() {
    console.log('AddFab');
    const dialogRef = this.dialog.open(AddCompetitionDialogComponent, {
      width: '250px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(name => {
      this.store.dispatch(new CreateCompetition(name));
    });

  }
}

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-add-competition-dialog',
  templateUrl: './add-competition-dialog.html',
})
export class AddCompetitionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCompetitionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
