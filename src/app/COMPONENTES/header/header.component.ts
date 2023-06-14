import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  //el @Output salida...
  //el @Input entrada...
  //(...) para evento, metodo, funcion...
  //[...] para propiedad...

  constructor(public mensaje: MatDialog) {}
  opciones:string[]=["Humano O", "Maquina X", "Aleatorio", "Jugar", "Reintentar", "Idioma", "Terminar"];
  @Output() va=new EventEmitter<number[]>();
  vei:number[]=[0,0,0];
  cm:number=0; //CONTADOR de jugadas
  inifin:number=0; //si inicio o no el jueo...
  cnb:number=3;
  jug:number=0;
  svf:boolean=false; //BLOQUEA LA BARRA DE SELECCION
  g:boolean=false;
  inicio:number=0;
  rconteo:number=0; //reinicia el conteo de jugadas

  openDialog() {
    const dialogRef = this.mensaje.open(MensajeComponent, {width: '155px', height: '180px',
    disableClose: true,data:{sino:0, texto:'Comienza el juego'}});
  }
  enviar(){
    this.g=true;
    if(this.inifin==0){
      console.log("inicia");
      this.openDialog();
      this.inifin=1;
      this.cnb=6; //CAMBIA EL BOTON A TERMINAR
      this.svf=true; //Barra de jugadores bloqueada
      this.cm++; //sumar 1 al contador de jugadas
    }else{
      console.log("termina");
      this.inifin=0;
      this.rconteo=0;
      this.cnb=3;  //CAMBIA EL BOTON A JUGAR
      this.svf=false; //barra de jugadores desbloqueada
    }
    if(this.jug==1){
      this.inicio=11;
    }else{
      this.inicio=12;
    }
    this.vei=[this.inifin,this.cm,this.jug,this.inicio,this.rconteo]; //se crea el paquete de datos
    this.va.emit(this.vei); //se envia el paquete de datos al padre
    this.cierra(); 
  }
  cierra(){
    setTimeout(() => {
      this.mensaje.closeAll();
      this.g=false;
    },1500);
  }
  turno(e: Event){ //metodo para seleccionar el jugador
    this.jug=(parseInt((e.target as HTMLInputElement).value));
  }

}

