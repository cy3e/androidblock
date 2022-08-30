import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddformPageRoutingModule } from './addform-routing.module';

import { AddformPage } from './addform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddformPageRoutingModule
  ],
  declarations: [AddformPage]
})
export class AddformPageModule {}
