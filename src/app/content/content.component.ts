import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollPosition: boolean =false;


  @HostListener('window:scroll', ['$event'])
  knowPosition(event){
    if(window.pageYOffset >= 260){
      this.scrollPosition = true;
    }
    else if(window.pageYOffset <= 100){
      this.scrollPosition = false;
    }
  }

}
