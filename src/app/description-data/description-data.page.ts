import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-data',
  templateUrl: './description-data.page.html',
  styleUrls: ['./description-data.page.scss'],
})
export class DescriptionDataPage implements OnInit {
  public desp_inp: string;
  public sel_desp: string = "contact";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.desp_inp = this.activatedRoute.snapshot.paramMap.get('id');
  }

  change_sel(sel){
      this.sel_desp = sel;
      console.log(sel);
  }

}
