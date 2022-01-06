import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoDTO } from '../../model/avaliacao.dto';



@IonicPage()
@Component({
  selector: 'page-avaliacoes',
  templateUrl: 'avaliacoes.html',
})
export class AvaliacoesPage {

  items : AvaliacaoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        idAvaliacao: 15,
        estabelecimentoId: 10,
        nomeEstabelecimento: "HCP ",
        dataCriacao: "01/12/2021 14:10",
        descricao: "Atendimento demorado",
        classificacao: 1.0,
        usuarioId: 1,
        apelido: "Skaggs"
      },
      {
        idAvaliacao: 16,
        estabelecimentoId: 13,
        nomeEstabelecimento: "UPA pdsw",
        dataCriacao: "29/11/2021 15:00",
        descricao: "aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa",
        classificacao: 3.0,
        usuarioId: 9,
        apelido: "Gordon"
      },
      {
        idAvaliacao: 19,
        estabelecimentoId: 7,
        nomeEstabelecimento: "UPA baixa rio lago",
        dataCriacao: "29/11/2021 14:10",
        descricao: "Avaliação é o substantivo feminino que significa ato de avaliar, ou remete para o efeito essa avaliação. Pode ser sinônimo de estimativa ou apreciação. Uma avaliação pode ser a estimativa do valor de alguma coisa ou de algum trabalho.",
        classificacao: 1.0,
        usuarioId: 4,
        apelido: "Dali4"
      },
      {
        idAvaliacao: 21,
        estabelecimentoId: 13,
        nomeEstabelecimento: "UPA pdsw",
        dataCriacao: "29/11/2021 12:00",
        descricao: "ddddddddddddddddddddd ddddddddddddddddddddddddddddddd ddddddddddddddddd",
        classificacao: 2.0,
        usuarioId: 3,
        apelido: "Lews"
      },
      {
        idAvaliacao: 18,
        estabelecimentoId: 13,
        nomeEstabelecimento: "UPA pdsw",
        dataCriacao: "25/11/2021 14:10",
        descricao: "",
        classificacao: 5.0,
        usuarioId: 6,
        apelido: "Muriel"
      },
      {
        idAvaliacao: 17,
        estabelecimentoId: 13,
        nomeEstabelecimento: "UPA pdsw",
        dataCriacao: "23/11/2021 14:10",
        descricao: "bbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbb",
        classificacao: 4.0,
        usuarioId: 2,
        apelido: "Harding"
      },
      {
        idAvaliacao: 4,
        estabelecimentoId: 2,
        nomeEstabelecimento: "Hospital Wakanda ",
        dataCriacao: "23/11/2021 14:10",
        descricao: "Foi bom o atendimento, mas poderia ser melhor",
        classificacao: 3.5,
        usuarioId: 4,
        apelido: "Dali4"
      },
      {
        idAvaliacao: 13,
        estabelecimentoId: 5,
        nomeEstabelecimento: "Hospital de Fratura",
        dataCriacao: "19/11/2021 14:10",
        descricao: "Hospital tem um atendimento rapido",
        classificacao: 5.0,
        usuarioId: 4,
        apelido: "Dali4"
      },
      {
        idAvaliacao: 12,
        estabelecimentoId: 1,
        nomeEstabelecimento: "Hospital Springfield",
        dataCriacao: "18/11/2021 14:10",
        descricao: "Atendimento Fast",
        classificacao: 5.0,
        usuarioId: 9,
        apelido: "Gordon"
      },
      {
        idAvaliacao: 11,
        estabelecimentoId: 2,
        nomeEstabelecimento: "Hospital Wakanda ",
        dataCriacao: "17/11/2021 14:10",
        descricao: "Hospital muito bom 11",
        classificacao: 5.0,
        usuarioId: 8,
        apelido: "Gansa"
      },
      {
        idAvaliacao: 1,
        estabelecimentoId: 1,
        nomeEstabelecimento: "Hospital Springfield",
        dataCriacao: "30/09/2021 13:31",
        descricao: "Hospital Muito Bom atendimento",
        classificacao: 4.0,
        usuarioId: 2,
        apelido: "Harding"
      }
    ]
  };

}
