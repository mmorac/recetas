import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  private json = 'assets/recetario/recetario.json';

  recetas = []
  index = 0;
  constructor(private http:HttpClient){
    this.getJson().subscribe(data => {
      this.recetas = data;
      console.log("Recetas:");
      console.log(this.recetas);
    });
  }

  getJson():Observable<any>{
    return this.http.get<any>(this.json);
  }
}
