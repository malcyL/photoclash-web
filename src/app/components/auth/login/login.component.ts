import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { SignInData } from 'angular-token';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../../store/state/app.state';
import { OAuthLogin } from './../../../store/actions/auth.actions';
import { isSpinnerShowing } from './../../../store/selectors/spinner.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: Observable<boolean>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.loading = this.store.pipe(select(isSpinnerShowing));
  }

  googleLogin() {
    this.store.dispatch(new OAuthLogin());
  }
}
