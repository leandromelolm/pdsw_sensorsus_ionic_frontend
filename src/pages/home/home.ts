import { Component, Renderer2 } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AvaliacaoService } from '../../services/domain/avaliacao.service';
import { AvaliacaoDTO } from '../../model/avaliacao.dto';
import { StorageService } from '../../services/storage.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //@Input("header") head;

  status = false;
  statusLoginButton = true;

  items : AvaliacaoDTO[] = [];
  page : number = 0;

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService,
    public avaliacaoService: AvaliacaoService,
    public loadingCtrl: LoadingController,
    public storage: StorageService,
    public renderer: Renderer2) {

  }

  ionViewDidEnter() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
     this.status = true;
     this.statusLoginButton = false;
    }
  }

  ionViewDidLoad(){
    this.loadData();
  }

  showDetail(estabelecimento_id : string) {
    this.navCtrl.push('EstabDetailPage', {estabelecimento_id : estabelecimento_id});
  }

  showAvaliacoes(estabelecimento_id : string){
    this.navCtrl.push('EstabDetailPage', {estabelecimento_id : estabelecimento_id});
  }

  loadData(){
    let loader = this.presentLoading();
    this.avaliacaoService.finAllRatingUser(this.page, 10)
      .subscribe(response =>{        
        this.items = this.items.concat(response['content']);        
        loader.dismiss();
        // console.log(this.page);
        //console.log(this.items);
      },
      error => {
        loader.dismiss();
      });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  pageEstabelecimento(){
    this.navCtrl.setRoot('EstabelecimentosPage');
  }

  signinpage(){
    this.navCtrl.push('SignInPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  doRefresh(refresher) {
    this.page = 0;
    this.items = [];
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }
  
}
