import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollPositionDetail: boolean = false;
  scrollPositionMap: boolean =false;
  scrollPositionCommentarie: boolean = false;
  scrollPositionPlataforms: boolean = false;
  count: number = 0;
  @Output() scrollPositionfooter: EventEmitter<boolean> =   new EventEmitter();

  /*@HostListener('window:scroll', ['$event'])
  knowPosition(event){
      
      console.log($(".teste").scrollTop() + $(".teste").innerHeight() >= $(".teste")[0].scrollHeight);

        $('div').scroll( function(){
          console.log((this).scrollTop() + $(this).innerHeight());
        })
      
    

    if(window.pageYOffset >= 63){
      this.scrollPositionDetail = true;
    }
    
    if(window.pageYOffset >= 600){
      this.scrollPositionMap = true;
    }

    if(window.pageYOffset >= 1130){
      this.scrollPositionCommentarie = true;
    }

    if(window.pageYOffset >= 1800){
      this.scrollPositionPlataforms = true;
    }
  }*/

  @HostListener("window:scroll", ["$event"])
onWindowScroll() {
    


    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    if(pos >= max - 10 )   {
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
          // code block
    //Do your action here
 }
}

}
