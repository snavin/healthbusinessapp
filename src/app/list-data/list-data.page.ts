import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.page.html',
  styleUrls: ['./list-data.page.scss'],
})
export class ListDataPage implements OnInit {

  constructor(
              public router: Router,
              private platform: Platform,) {
                this.platform.backButton.subscribeWithPriority(-1, () => {
                  this.router.navigate(['/']);
                  console.log("clicked back button");
                });
               }

  members: doctors[] = [{"speciality": "heart", "name": "namea", "hospital": "a hosp"},
                         {"speciality": "heart", "name": "nameb", "hospital": "b hosp"},
                         {"speciality": "heart", "name": "namec", "hospital": "c hosp"}];

  ngOnInit() {
 
  }

  

}

export interface doctors {
  name: string,
  speciality: string,
  hospital: string
}