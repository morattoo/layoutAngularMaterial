import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [ButtonsComponent, DemoComponent],
  imports: [
    DemoRoutingModule,
    MaterialModule
  ]
})
export class DemoModule { }
