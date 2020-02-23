import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../store/state/app.state';
import { Logout } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-logout-menu-button',
  templateUrl: './logout-menu-button.component.html',
  styleUrls: ['./logout-menu-button.component.css']
})
export class LogoutMenuButtonComponent implements OnInit {

  constructor(
    private store: Store<IAppState>,
  ) {}

  ngOnInit() {
  }

  onClick() {
    this.store.dispatch(new Logout());
  }
}
