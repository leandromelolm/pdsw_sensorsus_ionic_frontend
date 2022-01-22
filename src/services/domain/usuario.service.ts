import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { UsuarioDTO } from "../../model/usuario.dto";
import { API_CONFIG } from "../../config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: string) : Observable<UsuarioDTO> {
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/usuarios/email?value=${email}`);
    }

    insert(obj: UsuarioDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/usuarios/new`, obj,{ observe: 'response', responseType: 'text'}
        );
    }
    
}