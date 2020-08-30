import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetImagePageRoutingModule } from './set-image-routing.module';

import { SetImagePage } from './set-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetImagePageRoutingModule
  ],
  declarations: [SetImagePage],
})
export class SetImagePageModule {}
