import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposerComponent } from './composer/composer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ComposerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ComposerComponent
  ]
})
export class ComposerModule { }
