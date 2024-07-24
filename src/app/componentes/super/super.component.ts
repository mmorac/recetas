import { Component } from '@angular/core';
import { lista } from 'src/app/modelos/lista';
import { SuperService } from 'src/app/servicios/super/super.service';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent {
  listas:lista[] = [];
  
  constructor(private superServicio:SuperService){

  }

  getListas():void{
    this.superServicio.getListas().subscribe(data => {
      this.listas = data;
      console.log(this.listas);
    })
  }

  ngOnInit(){
    this.getListas();
  }

}
