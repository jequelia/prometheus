import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetImagePage } from './set-image.page';

const routes: Routes = [
  {
    path: '',
    component: SetImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetImagePageRoutingModule {}
