import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionDataPage } from './description-data.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class DescriptionDataPageRoutingModule {}
