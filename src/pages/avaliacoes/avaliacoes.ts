import { Component, Input } from '@angular/core';
import { IonicPage, Item, ItemSliding, NavController, NavParams } from 'ionic-angular';
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



// {
//   "idAvaliacao": 4,
//   "estabelecimentoId": 2,
//   "nomeEstabelecimento": "Hospital Wakanda ",
//   "dataCriacao": "23/11/2021 14:10",
//   "descricao": "Foi bom o atendimento, mas poderia ser melhor",
//   "classificacao": 3.0,
//   "usuarioId": 4,
//   "apelido": "Dali4"
// }