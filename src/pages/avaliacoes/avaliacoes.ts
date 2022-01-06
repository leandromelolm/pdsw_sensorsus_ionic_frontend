import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoDTO } from '../../model/avaliacao.dto';
import { AvaliacaoService } from '../../services/domain/avaliacao.service';



@IonicPage()
@Component({
  selector: 'page-avaliacoes',
  templateUrl: 'avaliacoes.html',
})
export class AvaliacoesPage {

  items : AvaliacaoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public avaliacaoService: AvaliacaoService) {
  }

  ionViewDidLoad() {    
    let estabelecimento_id  = this.navParams.get('estabelecimento_id')
    this.avaliacaoService.findByEstabelecimentoAvaliacao(estabelecimento_id)
      .subscribe(response => {
        console.log(response['content']);
        this.items = response['content'];
      },
      error =>{
        console.log(error);
      });
  }
  
}
