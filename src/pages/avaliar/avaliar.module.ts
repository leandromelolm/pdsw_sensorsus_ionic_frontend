import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecaptchaModule } from 'ng-recaptcha';
import { AvaliarPage } from './avaliar';

@NgModule({
  declarations: [
    AvaliarPage,
  ],
  imports: [
    IonicPageModule.forChild(AvaliarPage),
    RecaptchaModule,
  ],
})
export class AvaliarPageModule {}
