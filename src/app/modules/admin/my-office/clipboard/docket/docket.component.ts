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

  toggleSelectAll(){
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.selectAssigned = false;
      this.selectFavorite = false;
      this.selectOneTime = false;
    }
  }

  toggleSelectAssigned(){
    this.selectAssigned = !this.selectAssigned;
    if (this.selectAssigned) {
      this.selectAll = false;
    }
  }

  toggleSelectFavorite(){
    this.selectFavorite = !this.selectFavorite;
    if (this.selectFavorite) {
      this.selectAll = false;
    }
  }

  toggleSelectOneTime(){
    this.selectOneTime = !this.selectOneTime;
    if (this.selectOneTime) {
      this.selectAll = false;
    }
  }

  ngOnInit(): void {
  }

}
