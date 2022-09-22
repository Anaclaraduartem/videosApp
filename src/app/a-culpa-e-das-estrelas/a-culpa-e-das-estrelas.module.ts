import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ACulpaEDasEstrelasPageRoutingModule } from './a-culpa-e-das-estrelas-routing.module';

import { ACulpaEDasEstrelasPage } from './a-culpa-e-das-estrelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ACulpaEDasEstrelasPageRoutingModule
  ],
  declarations: [ACulpaEDasEstrelasPage]
})
export class ACulpaEDasEstrelasPageModule {}
