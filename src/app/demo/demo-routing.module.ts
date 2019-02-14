import { DemoComponent } from './demo/demo.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent }
    ]
  },
  {
    path: 'demo/**',
    redirectTo: 'demo'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
