import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    constructor(public auth: AuthService) {}

  ngOnInit() {
  }

}
