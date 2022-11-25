import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docket',
  templateUrl: './docket.component.html',
  styleUrls: ['./docket.component.scss']
})
export class DocketComponent implements OnInit {
  sideNav:boolean = false;
  selectAll:boolean = true;
  selectAssigned:boolean = false;
  selectFavorite:boolean = false;
  selectOneTime:boolean = false;
  constructor() { }

  showTaskList(){
    this.sideNav = !this.sideNav;
  }

  toggleSelect(type:string){
    switch(type){
      case 'All':
        this.selectAll = !this.selectAll;
          if (this.selectAll) {
            this.selectAssigned = false;
            this.selectFavorite = false;
            this.selectOneTime = false;
          }
        break;
      case 'Assigned':
        this.selectAssigned = !this.selectAssigned;
          if (this.selectAssigned) {
            this.selectAll = false;
          }
        break;
      case 'Favorite':
        this.selectFavorite = !this.selectFavorite;
          if (this.selectFavorite) {
            this.selectAll = false;
          }
        break;
      case 'Onetime':
        this.selectOneTime = !this.selectOneTime;
          if (this.selectOneTime) {
            this.selectAll = false;
          }
        break;
    }
  }

  ngOnInit(): void {
  }

}
