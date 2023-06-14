import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rcjp:number=0; //contador
  rjsn:number=0; //iniciar o finalizar
  rjug:number=0; //jugador
  inicio:number=0;
  Rescj:number=0; //reinicia el conteo de jugadas

  chombre:number=0;
  cmaquina:number=0;
  cempate:number=0;

  Control:number=0;

  //metodo que recibe los datos del hijo header
  metodopadre(rv: number[]){
    this.rjsn=rv[0]; //si inicio o no el jueo...
    // 0 es inicio...
    // 1 es fin...
    //del juego
    this.rcjp=rv[1]; //numero de juegos
    this.rjug=rv[2]; //este recibe el jugador
    this.inicio=rv[3];
    this.Rescj=rv[4]; //reinicia el conteo de jugadas
  }
  //metodo que recibe los datos del hijo footer
  metodopadreB(rv: number[]){
    this.chombre=rv[0];
    this.cmaquina=rv[1];
    this.cempate=rv[2];
  }
  /*
  title = 'gatoInteligente';
  iniciarP:number[]=[];
  quienP:number=0;
  contadorP:number=0;
  metododerecivirmensaje(r: number[]){
    this.iniciarP[0]=r[0];
    this.iniciarP[1]=r[1];
    this.contadorP=r[2];
  }
  */
}
