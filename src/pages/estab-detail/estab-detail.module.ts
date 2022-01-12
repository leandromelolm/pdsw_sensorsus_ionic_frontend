import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabDetailPage } from './estab-detail';

@NgModule({
  declarations: [
    EstabDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EstabDetailPage),
  ],
})
export class EstabDetailPageModule {}
