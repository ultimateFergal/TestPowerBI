import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    MaterialModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
