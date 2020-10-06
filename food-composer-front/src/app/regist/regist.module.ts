import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistComponent } from './regist/regist.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

/**
 * 登録モジュール
 */
@NgModule({
  declarations: [
    RegistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    RegistComponent
  ]
})
export class RegistModule { }
