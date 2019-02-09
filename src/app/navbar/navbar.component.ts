import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  footerPermission:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  footerApear(event: boolean){
      this.footerPermission = event;
  }

}
