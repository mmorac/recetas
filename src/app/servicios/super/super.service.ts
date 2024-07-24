import { Injectable } from '@angular/core';
import { lista } from 'src/app/modelos/lista';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor(private http:HttpClient) { }

  private json = "../../assets/lista_super/listas.json";

  getListas():Observable<lista[]>{
    return this.http.get<lista[]>(this.json);
  }
}
