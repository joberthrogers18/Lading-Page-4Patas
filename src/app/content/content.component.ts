import { Component, HostListener, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { TestBed } from '@angular/core/testing';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges{

  constructor() { }

  ngOnInit() {
  }

  scrollPositionDetail: boolean = false;
  scrollPositionMap: boolean =false;
  scrollPositionCommentarie: boolean = false;
  scrollPositionPlataforms: boolean = false;
  count: number = 0;
  @Output() scrollPositionfooter: EventEmitter<boolean> =   new EventEmitter();

  mouseOverShower: boolean = false;
  mouseOverHealth: boolean = false;
  mouseOverProduct: boolean = false;

  @Input() permitionClick: boolean = false;

  ngOnChanges(){
    if(this.permitionClick){
      this.scrollPositionDetail = true;
      this.scrollPositionMap =true;
      this.scrollPositionCommentarie =true;
      this.scrollPositionPlataforms = true;

      setTimeout(function () {
        window.scrollTo(0,(document.body.scrollHeight / 3) - 10);
      }, 500);

    }
  }

  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
    
      let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
      let max = document.documentElement.scrollHeight;

      if(pos >= max - 20 )   {
        this.count += 1;
        console.log(this.count);

        switch(this.count) {
          case 1:
            this.scrollPositionDetail = true;
            break;
          case 2:
            this.scrollPositionMap = true;
            break;
          case 3:
          this.scrollPositionCommentarie = true;
          break;
          case 4:
            this.scrollPositionPlataforms = true;
          case 6: 
            this.scrollPositionfooter.emit(true);
          break;
        }
    }

  }

  ActionMouseOverShower(event){
    if(event){
      this.mouseOverShower = true;
    }
    else{
      this.mouseOverShower = false;
    }
  }

  ActionMouseOverHealth(event){
    if(event){
      this.mouseOverHealth = true;
    }
    else{
      this.mouseOverHealth = false;
    }
  }

  ActionMouseOverProduct(event){
    if(event){
      this.mouseOverProduct = true;
    }
    else{
      this.mouseOverProduct = false;
    }
  }

}
