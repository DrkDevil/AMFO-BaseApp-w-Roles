import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './../../modules/core/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() :void {
   const body = document.getElementsByTagName('body')[0];
   body.classList.add('home');
  }
  ngOnDestroy(): void {
  const body = document.getElementsByTagName('body')[0];
  body.classList.remove('home');
  }
}
