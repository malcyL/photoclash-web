import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.component.html',
  styleUrls: ['./oauth-callback.component.css']
})
export class OauthCallbackComponent implements OnInit {

  constructor(private tokenService: AngularTokenService, private router: Router) { }

  ngOnInit() {
    this.tokenService.processOAuthCallback();
    this.router.navigate(['/competitions']);
  }

}
