import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionDataPageRoutingModule } from './description-data-routing.module';

import { DescriptionDataPage } from './description-data.page';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionDataPageRoutingModule
  ],
  declarations: [DescriptionDataPage, FooterComponent, HeaderComponent]
})
export class DescriptionDataPageModule {}
