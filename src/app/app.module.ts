import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EstabelecimentoService } from '../services/domain/estabelecimento.service';
import { AvaliacaoService } from '../services/domain/avaliacao.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EstabelecimentoService,
    AvaliacaoService,
    ErrorInterceptorProvider,
    AuthService
  ]
})
export class AppModule {}
