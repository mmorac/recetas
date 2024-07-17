import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { receta } from 'src/app/modelos/receta';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  private json = 'assets/recetario/recetario.json';
  busqueda:string = "";
  recetas:receta[] = [];
  recetasBackup:receta[] = [];
  index = 0;
  constructor(private http:HttpClient){
  }

  ngOnInit():void{
    this.getItems();
  }

  getItems():void{
    this.getJson().subscribe(data => {
      this.recetas = data;
      this.recetasBackup = data;
      this.recetas.sort((a, b) => a.nombre.localeCompare(b.nombre))
      this.recetasBackup.sort((a, b) => a.nombre.localeCompare(b.nombre))
      console.log("Recetas:");
      console.log(this.recetas);
    });
  }

  alEscribir(){
    if(this.busqueda.trim() === ""){
      this.recetas = this.recetasBackup;
    }
    else{
      this.recetas = this.recetas.filter(receta => 
        receta.nombre.toLowerCase().includes(this.busqueda)
      );  
    }
    console.log("RECETAS:" + this.recetas);
  }

  getJson():Observable<any>{
    return this.http.get<any>(this.json);
  }
}
