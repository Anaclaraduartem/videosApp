import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ACincoPassosDeVocePageRoutingModule } from './a-cinco-passos-de-voce-routing.module';

import { ACincoPassosDeVocePage } from './a-cinco-passos-de-voce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ACincoPassosDeVocePageRoutingModule
  ],
  declarations: [ACincoPassosDeVocePage]
})
export class ACincoPassosDeVocePageModule {}
