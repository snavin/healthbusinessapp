import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDataPageRoutingModule } from './list-data-routing.module';

import { ListDataPage } from './list-data.page';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDataPageRoutingModule
  ],
  declarations: [ListDataPage, FooterComponent, HeaderComponent]
})
export class ListDataPageModule {}
