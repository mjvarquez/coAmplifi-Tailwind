import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  pageTitle = this.activatedRoute.snapshot.routeConfig.title;

  ngOnInit(): void {
    
  }

}
