import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './../../modules/core/authentication/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {
   const body = document.getElementsByTagName('body')[0];
   body.classList.add('profile');
  }
  ngOnDestroy(): void {
  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('profile');
  }
}
