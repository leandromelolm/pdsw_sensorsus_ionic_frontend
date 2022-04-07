import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { NovaAvaliacaoDTO } from "../../model/nova_avaliacao.dto";

@Injectable()
export class AvaliacaoService{

    constructor(public http:HttpClient){        
    }

    findByEstabelecimentoAvaliacao(estabelecimento_id : string){
        return this.http.get(`${API_CONFIG.baseUrl}/api/avaliacoes/estabelecimento/id/?id=${estabelecimento_id}`); // rota paginada
    }

    finAllRatingUser(page: number = 0, linesPerPage : number){
        return this.http.get(`${API_CONFIG.baseUrl}/api/avaliacoes/estabelecimento/?page=${page}&linesPerPage=${linesPerPage}`)
    }
    //GET: usuario visualizar suas próprias avaliações (passando ID por parametro)
    findByIDRatingUser(usuario_id :number, page: number = 0, linesPerPage : number){
        return this.http.get(`${API_CONFIG.baseUrl}/api/avaliacoes/usuarioid/?id=${usuario_id}&page=${page}&linesPerPage=${linesPerPage}`)
    }

    // Método HTTP: POST
    // cria uma nova avaliação
    insert(obj : NovaAvaliacaoDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/api/avaliacoes/new`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    // Método HTTP: PUT 
    // cria uma nova avaliação ou altera caso ja exista uma avaliação do feita pelo usuario
    update(obj : NovaAvaliacaoDTO){
        return this.http.put(
            `${API_CONFIG.baseUrl}/api/avaliacoes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}