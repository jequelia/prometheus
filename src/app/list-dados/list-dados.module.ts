import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDadosPageRoutingModule } from './list-dados-routing.module';

import { ListDadosPage } from './list-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDadosPageRoutingModule
  ],
  declarations: [ListDadosPage]
})
export class ListDadosPageModule {}
