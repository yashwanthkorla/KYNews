import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { maincommonPage } from './maincommon';

@NgModule({
  declarations: [
    maincommonPage,
  ],
  imports: [
    IonicPageModule.forChild(maincommonPage),
  ],
})
export class MaincommonPageModule {}
