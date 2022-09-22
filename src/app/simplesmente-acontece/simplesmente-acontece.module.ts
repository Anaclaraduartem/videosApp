import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimplesmenteAcontecePageRoutingModule } from './simplesmente-acontece-routing.module';

import { SimplesmenteAcontecePage } from './simplesmente-acontece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimplesmenteAcontecePageRoutingModule
  ],
  declarations: [SimplesmenteAcontecePage]
})
export class SimplesmenteAcontecePageModule {}
