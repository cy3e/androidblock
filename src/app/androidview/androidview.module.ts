import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndroidviewPageRoutingModule } from './androidview-routing.module';

import { AndroidviewPage } from './androidview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndroidviewPageRoutingModule
  ],
  declarations: [AndroidviewPage]
})
export class AndroidviewPageModule {}
