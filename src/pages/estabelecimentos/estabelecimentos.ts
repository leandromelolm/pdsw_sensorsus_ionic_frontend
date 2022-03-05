import { Component, Input } from '@angular/core';
import { IonicPage, Item, ItemSliding, NavController, NavParams } from 'ionic-angular';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { EstabelecimentoService } from '../../services/domain/estabelecimento.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
  selector: 'page-estabelecimentos',
  templateUrl: 'estabelecimentos.html',
})
export class EstabelecimentosPage {
  
  items: EstabelecimentoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public estabelecimentService: EstabelecimentoService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.presentLoading();   
    this.estabelecimentService.findAll()
      .subscribe(response =>{              
         this.items = response;
         loader.dismiss();
       },
       error => {});
  }

  showAvaliacoes(estabelecimento_id : string){
    this.navCtrl.push('EstabDetailPage', {estabelecimento_id : estabelecimento_id});
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde... Buscando dados do servidor..."
    });
    loader.present();
    return loader;
  }
  
}
