import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonPage } from './common';

@NgModule({
  declarations: [
    CommonPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonPage),
  ],
})
export class CommonPageModule {}
