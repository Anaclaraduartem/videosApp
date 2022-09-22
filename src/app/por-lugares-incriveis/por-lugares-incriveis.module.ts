import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorLugaresIncriveisPageRoutingModule } from './por-lugares-incriveis-routing.module';

import { PorLugaresIncriveisPage } from './por-lugares-incriveis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorLugaresIncriveisPageRoutingModule
  ],
  declarations: [PorLugaresIncriveisPage]
})
export class PorLugaresIncriveisPageModule {}
