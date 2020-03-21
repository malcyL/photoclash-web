import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { SignInData } from 'angular-token';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../store/state/app.state';
import { OAuthLogin } from './../../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
  }

  googleLogin() {
    this.store.dispatch(new OAuthLogin());
  }
}
