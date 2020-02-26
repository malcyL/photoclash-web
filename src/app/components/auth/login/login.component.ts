import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'angular-token';
import { Store } from '@ngrx/store';

import { IAppState } from '../../../store/state/app.state';
import { Login, OAuthLogin } from './../../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  signInData: SignInData = <SignInData>{};

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new Login(this.signInData));
  }

  googleLogin() {
    this.store.dispatch(new OAuthLogin());
  }
}
