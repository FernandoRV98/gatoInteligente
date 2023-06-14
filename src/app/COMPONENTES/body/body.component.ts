import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent {

  constructor(public mensaje: MatDialog) {}

  openDialog(f: number, m:string) {
    const dialogRef = this.mensaje.open(MensajeComponent, {width: '155px', height: '180px',
    disableClose: true,data:{texto:m,sino:f}});
  }

  @Input() vson:number=0;
  @Input() vjug:number=0;
  @Input() inicio:number=0;
  @Input() contador:number=0;

  @Output() evbody=new EventEmitter<number[]>();
  
  
  limpiando:string[]=["","","","","","","","","",""];
  spiner:boolean=true;
  tf:boolean=false;
  
  continuar:number=0;
  ap:boolean=false;
  ap1:number[]=[];
  ap2:number=0;
  gshombre:number=0;
  gsmaquina:number=0;
  empate:number=0;

  //svf:boolean=false;


  contenido1(r: Event){
    if((r.target as HTMLInputElement).value==""){
      this.contenido(parseInt((r.target as HTMLInputElement).id));
    }
  }

  contenido(g:number){
    if (g==11){
      if(this.vson==1){
        this.maquina();
      }
    }else{
      if(g<=9){
        if(this.vson==1){
          if(this.vjug==0){
            this.limpiando[g]="O";
            this.vjug=1;
            this.contador++;
            this.revisarjugada("O");
            if(this.continuar==0){
              if(this.contador==9){
                this.openDialog(2, "Empate");
                this.empate++;
                this.reiniciar();
              }else{
                this.openDialog(1, "Espere...");
                this.maquina();
              }
            }
          }else{
            this.openDialog(1, "Espere...");
            this.maquina();
          }
        }else{
          this.limpiando=["","","","","","","","","",""];
        }
      }
    }
  }

  revisarjugada(s: string){
    if(this.limpiando[0]==s && this.limpiando[1]==s && this.limpiando[2]==s
      || this.limpiando[3]==s && this.limpiando[4]==s && this.limpiando[5]==s
      || this.limpiando[6]==s && this.limpiando[7]==s && this.limpiando[8]==s
      || this.limpiando[0]==s && this.limpiando[3]==s && this.limpiando[6]==s
      || this.limpiando[1]==s && this.limpiando[4]==s && this.limpiando[7]==s
      || this.limpiando[2]==s && this.limpiando[5]==s && this.limpiando[8]==s
      || this.limpiando[0]==s && this.limpiando[4]==s && this.limpiando[8]==s
      || this.limpiando[2]==s && this.limpiando[4]==s && this.limpiando[6]==s){

      if(s=="O"){
        if(this.limpiando[0]==s && this.limpiando[1]==s && this.limpiando[2]==s){
          this.openDialog(2, "Ganaste");
          this.ap1=[0,1,2];
          console.log("ESTRATEGA DE ATAQUE ACTIVADA");
          this.ap=true;
          this.gshombre++;
          this.continuar=1;
          this.reiniciar();
        } else {
          this.openDialog(2, "Ganaste");
          console.log("ESTRATEGA DE ATAQUE DESACTIVADA");
          this.ap=false;
          this.gshombre++;
          this.continuar=1;
          this.reiniciar();
        }
      }
      if(s=="X"){
        if(this.mensaje){
          this.mensaje.closeAll();
          this.openDialog(2, "Perdiste");
          this.gsmaquina++;
        }
        this.continuar=1;
        this.reiniciar();
      }
    }
  }

  reiniciar(){
    setTimeout(() => {
      
      this.vjug=0;
      this.contador=0;
      this.continuar=0;
      this.enviarPuntaje();
      //this.limpiar();
    },1000);
  }

  reinicioEmergencia(){
    this.vjug=0;
    this.contador=0;
    this.continuar=0;
    this.limpiar();
  }

  enviarPuntaje(){
    this.evbody.emit([this.gshombre,this.gsmaquina,this.empate]);
  }

  maquina() {
    let casillaVaciaEncontrada = false;
    let index = -1;
    const casillasDisponibles = [];
    //EL ESTRATEGA DE ATAQUE
    if (this.ap && (this.limpiando[this.ap1[0]] === "" || this.limpiando[this.ap1[1]] === "" || this.limpiando[this.ap1[2]] === "")) {
      if (this.ap1.length >= 1) {
        console.log("ESTRATEGA DE ATAQUE EN EJECUCIÓN");
        for (const ap of this.ap1) {
          if (this.limpiando[ap] === "") {
            casillasDisponibles.push(ap); // SE DECIDE EL TIRO POR EL ESTRATEGA
          }
        }
      }
    } else { //TIRO NORMAL DE LA MAQUINA
      for (let i = 0; i < 9; i++) {
        if (this.limpiando[i] === "") {
          casillasDisponibles.push(i); //SE DECIDE EL TIRO POR LA MAQUINA
        }
      }
    }
    // AROJAR EL TIRO QUE SE DECIDIO
    if (casillasDisponibles.length > 0) {
      index = casillasDisponibles[Math.floor(Math.random() * casillasDisponibles.length)];
      console.log('Posición aleatoria maquina: ' + index);
      this.limpiando[index] = "X";
      this.contador++;
      this.vjug = 0;
      this.cierra();
    }
  }

  cierra(){
    setTimeout(() => {
      this.mensaje.closeAll();
      this.revisarjugada("X");
    },500);
  }
  limpiar(){
    this.limpiando=["","","","","","","","","",""];
  }
  ver(){
    setTimeout(() => {
      this.contenido(this.inicio);
    },500);
  }
}
