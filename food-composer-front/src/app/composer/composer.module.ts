import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposerComponent } from './composer/composer.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

/**
 * コンポーザーモジュール
 */
@NgModule({
  declarations: [
    ComposerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    ComposerComponent,
  ]
})
export class ComposerModule { }
