import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.page.html',
  styleUrls: ['./list-data.page.scss'],
})
export class ListDataPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]

}
