import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinenciaAoAmorPageRoutingModule } from './continencia-ao-amor-routing.module';

import { ContinenciaAoAmorPage } from './continencia-ao-amor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinenciaAoAmorPageRoutingModule
  ],
  declarations: [ContinenciaAoAmorPage]
})
export class ContinenciaAoAmorPageModule {}
