import { Component} from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoDTO } from '../../model/avaliacao.dto';
import { EstabelecimentoDTO } from '../../model/estabelecimentos.dto';
import { AvaliacaoService } from '../../services/domain/avaliacao.service';
import { EstabelecimentoService } from '../../services/domain/estabelecimento.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-estab-detail',
  templateUrl: 'estab-detail.html',
})
export class EstabDetailPage {

  items : AvaliacaoDTO[];
  e : EstabelecimentoDTO;
  detail: string = "avaliacoes";  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avaliacaoService: AvaliacaoService,
    public estabService: EstabelecimentoService,
    public storage: StorageService,
    public alertCtrl: AlertController
    ) {
     
  }

  ionViewDidLoad() {
    let estabelecimento_id  = this.navParams.get('estabelecimento_id')
    this.avaliacaoService.findByEstabelecimentoAvaliacao(estabelecimento_id)
      .subscribe(response => {
        console.log(response['content']);
        this.items = response['content'];
        this.estabelecimentoEnderecoLoad();
      },
      error =>{
        console.log(error);
      });
  }
  estabelecimentoEnderecoLoad(){
    let estabelecimento_id  = this.navParams.get('estabelecimento_id')
    this.estabService.findById(estabelecimento_id)
    .subscribe(response =>{
      console.log(response);
      this.e = response;
      
    })    
  }
  avaliar(e: EstabelecimentoDTO){
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.navCtrl.push('AvaliarPage',{estab : e});
    }else{
      this.showNoLogin();
    }   
  }  

  showNoLogin(){
    let alert = this.alertCtrl.create({
      title: 'Precisa fazer o Login!',
      message: 'Faça o login ou cadastre-se!',
      enableBackdropDismiss: false,
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () =>{
            this.navCtrl.setRoot('HomePage');
          }
        } 
      ]
    });
    alert.present();
  }

}