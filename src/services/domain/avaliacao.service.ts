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

    finAllRatingUser(page: number = 0, linePerPage : number = 12){
        return this.http.get(`${API_CONFIG.baseUrl}/api/avaliacoes/estabelecimento/?page=${page}&linesPerPage=${linePerPage}`)
    }

    // // Método HTTP: POST - cria uma nova avaliação
    // insert(obj : NovaAvaliacaoDTO){
    //     return this.http.post(
    //         `${API_CONFIG.baseUrl}/api/avaliacoes/new`,
    //         obj,
    //         {
    //             observe: 'response',
    //             responseType: 'text'
    //         }
    //     );
    // }

    // Método HTTP: PUT 
    //cria uma nova avaliação ou altera caso ja exista uma avaliação do feita pelo usuario
    insert(obj : NovaAvaliacaoDTO){
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