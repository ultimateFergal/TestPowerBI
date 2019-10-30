import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    MaterialModule,
    CoreModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    CoreModule
  ]
})
export class SharedModule { }
