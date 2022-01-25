import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { EstabelecimentoDTO } from "../../model/estabelecimentos.dto";
import { Observable } from "rxjs/Rx"; // IMPORT ATUALIZADO  

@Injectable()
export class EstabelecimentoService{

    constructor(public http:HttpClient){        
    }

    findAll() : Observable<EstabelecimentoDTO[]>{
        // return this.http.get<EstabelecimentoDTO[]>(`${API_CONFIG.baseUrl}/estabelecimentos`); //rota paginada
        return this.http.get<EstabelecimentoDTO[]>(`${API_CONFIG.baseUrl}/estabelecimentos/detalhes`); //rota sem paginação
    }
    
    findById(estabelecimento_id : string) {
        return this.http.get<EstabelecimentoDTO>(`${API_CONFIG.baseUrl}/estabelecimentos/${estabelecimento_id}`); //rota sem paginação
    }
}