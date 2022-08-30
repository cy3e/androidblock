import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddformPage } from './addform.page';

const routes: Routes = [
  {
    path: '',
    component: AddformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddformPageRoutingModule {}
