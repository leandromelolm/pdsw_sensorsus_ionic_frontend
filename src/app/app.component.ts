import { Component, ViewChild } from '@angular/core';
import { AlertController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: String = 'HomePage';
  //rootPage: String = 'EstabelecimentosPage';

  pages: Array<{title: string, component: String}>;
  pagesLoggedout: Array<{title: string, component: String}>;
  pagesLogged: Array<{title: string, component: String}>;
  status = false;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthService,
    public storage: StorageService,
    public alertCtrl: AlertController) {

    this.initializeApp();

    // console.log(storage.getLocalUser())
    
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Lista de Estabelecimentos', component: 'EstabelecimentosPage' },
      // { title: 'Meu Perfil', component: 'ProfilePage' },
      // { title: 'Sair', component: ''}      
    ];

    this.pagesLoggedout = [      
      { title: 'Entrar', component: 'SignInPage' },
      { title: 'Cadastrar', component: 'SignupPage'}
    ];

    this.pagesLogged = [
      { title: 'Minhas Avaliações', component: 'MyRatingsPage' },      
      { title: 'Meu Perfil', component: 'ProfilePage' },
      { title: 'Sair', component: ''}
      
    ];

    if (storage.getLocalUser() == null){
      this.status = false;
    } else {
      this.status = true;
    }

    // if (storage.getLocalUser() == null){
    //   this.pages = [
    //     { title: 'Home', component: 'HomePage' },
    //     // { title: 'Meu Perfil', component: 'ProfilePage' },
    //     { title: 'Lista de Estabelecimentos', component: 'EstabelecimentosPage' },
    //     { title: 'Sair', component: ''}
    //   ];
    // }
    // if (storage.getLocalUser()){
    //     this.pages = [
    //       { title: 'Home', component: 'HomePage' },
    //       { title: 'Meu Perfil', component: 'ProfilePage' },
    //       { title: 'Lista de Estabelecimentos', component: 'EstabelecimentosPage' },
    //       { title: 'Sair', component: ''}
    //   ];
    // }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : {title:string, component:string}) {

    switch (page.title) {
      case 'Sair':
      this.status = false;
      this.auth.logout();
      this.nav.setRoot('HomePage');
      break;

      default:
      this.nav.setRoot(page.component);
    }
  }

  openPageLogged (page : {title:string, component:string}){

    switch (page.title) {
      case 'Sair':
      this.status = false;
      this.auth.logout();
      this.nav.setRoot('HomePage');
      break;

      default:
      this.nav.setRoot(page.component);
    }
  }
  
  openPageLoggedOut (page : {title:string, component:string}){
    switch (page.title) {
      case 'Sair': 
      this.status = true;
      break;  

      default:      
      this.nav.setRoot(page.component);
    }
  }

}
