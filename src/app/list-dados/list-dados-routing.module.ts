import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDadosPage } from './list-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ListDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDadosPageRoutingModule {}
