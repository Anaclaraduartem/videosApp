import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplesmenteAcontecePage } from './simplesmente-acontece.page';

const routes: Routes = [
  {
    path: '',
    component: SimplesmenteAcontecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplesmenteAcontecePageRoutingModule {}
