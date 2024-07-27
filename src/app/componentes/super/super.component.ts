import { Component } from '@angular/core';
import { item } from 'src/app/modelos/item';
import { lista } from 'src/app/modelos/lista';
import { SuperService } from 'src/app/servicios/super/super.service';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})

export class SuperComponent {


  listas:lista[] = [];
  habilitarActualizar:boolean = false;

  constructor(private superServicio:SuperService){

  }

  getListas():void{
    this.superServicio.getListas().subscribe(data => {
      this.listas = data;
    })
  }

  ngOnInit(){
    this.getListas();
  }

  draggedItem:any;
  draggedFromIndex:number = -1;

  dragStart(event:DragEvent, item:any){
    this.draggedItem = item;
    const target = event.target as HTMLElement;
    const indexStr = target.getAttribute('data-index');
    this.draggedFromIndex = indexStr? +indexStr : -1;
  }

  allowDrop(event: DragEvent){
    event.preventDefault();
  }

  drop(event:DragEvent, toIndex:number){
    event.preventDefault();
    if(this.draggedItem && this.draggedFromIndex !== undefined){
      const fromList = this.listas[this.draggedFromIndex];
      fromList.items = fromList.items.filter(item => item !== this.draggedItem);

      const toList = this.listas[toIndex];
      toList.items.push(this.draggedItem);
      this.draggedItem = null;
      this.draggedFromIndex = -1;
      this.habilitarActualizar = true;
    }
  }

  marcar(item:item){
    item.marcado = !item.marcado;
    this.habilitarActualizar = true;
  }

  agregarNuevo(index:number){
    var nuevo: item = {
      descripcion: '',
      marcado: false,
      super: this.listas[index].super 
    };
    this.listas[index].items.push(nuevo);
    this.habilitarActualizar = true;
  }

  actualizarDescripcion(i:number, j:number, evento:Event):void{
    var valorInputElement = evento.target as HTMLInputElement;
    var descripcion = valorInputElement.value;
    this.listas[i]["items"][j]["descripcion"] = descripcion;
  }

  actualizarLista():void{
    var listaString = JSON.stringify(this.listas);
    this.superServicio.actualizarListas(listaString);
    this.habilitarActualizar = false;
  }
}
