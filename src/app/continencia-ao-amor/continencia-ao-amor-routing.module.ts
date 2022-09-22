import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinenciaAoAmorPage } from './continencia-ao-amor.page';

const routes: Routes = [
  {
    path: '',
    component: ContinenciaAoAmorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinenciaAoAmorPageRoutingModule {}
