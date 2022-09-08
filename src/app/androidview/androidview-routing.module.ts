import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndroidviewPage } from './androidview.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidviewPageRoutingModule {}
