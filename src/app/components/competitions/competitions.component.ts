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
    const dialogRef = this.dialog.open(AddCompetitionDialogComponent, {
      width: '250px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(name => {
      // It would be better if this dialog used a Reactive Form
      // However, it's just a quick dialog from a simple dialog example.
      // There is no form validation yet. This guard just adds
      // the most basic of check - that name is not null, which is
      // what happens if return is pressed.
      if (name) {
        this.store.dispatch(new CreateCompetition(name));
      }
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
export class AddCompetitionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCompetitionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.dialogRef.keydownEvents().subscribe(event => {
        if (event.key === 'Enter') {
            this.dialogRef.close(this.data.name);
        }
    });
}

  onCancel(): void {
    this.dialogRef.close();
  }
}
