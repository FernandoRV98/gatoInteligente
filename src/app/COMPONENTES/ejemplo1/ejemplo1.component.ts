import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Auto } from 'src/app/clases/interfaces';
import { Alumno } from 'src/app/clases/interfaces';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css'],
})
//Se recomienda tener un constructor con un OnInit
export class Ejemplo1Component implements OnInit {

  x: number = 0;
  y: number = 0;
  r: number = 0;
  t: number = 0;
  txt: string = '';
  //Se gener auna instancia que adopta las propiedades de la interfaz 'Auto' y otra de la interfaz Clase1
  autoArray: Auto[] = [{ noSerie: 'TKDI55', marca: 'TOSHIBA', modelo: 'TX600', color: 'AZUL', costo: 35000},
  { noSerie: 'TKDI56', marca: 'TASHIDA', modelo: 'TX600', color: 'AZUL', costo: 35000},
  { noSerie: 'TKDI57', marca: 'MITZUBISHI', modelo: 'TX600', color: 'AZUL', costo: 35000},
  { noSerie: 'TKDI58', marca: 'TOSHIBA', modelo: 'TX600', color: 'AZUL', costo: 35000},
  { noSerie: 'TKDI59', marca: 'TOSHIBA', modelo: 'TX600', color: 'AZUL', costo: 35000},];
  alumnoArray: Alumno[] = [
    { id: 100, nombre: 'Fernando', edad: 88, telefono: "5546793029" },
    { id: 101, nombre: 'Ami', edad: 27, telefono: "5639992745" },
    { id: 102, nombre: 'Maria', edad: 21, telefono: "5546793029" },
    { id: 103, nombre: 'Juan', edad: 65, telefono: "5546793029" },
    { id: 104, nombre: 'Jenn', edad: 19, telefono: "5546793029" },
    { id: 105, nombre: 'Luis', edad: 45, telefono: "5546793029" },
  ];

  var: number = 0;
  var1: number = 0;
  var2: string = 'Hola123';
  //El constructor da el paso al momento de cargar la vista
  constructor() {
    //EL constructuro permite que se cargue mas rapido y con mas detalles la aplicacion
    //this.var = this.var + 1; //modificamos las variables para comprobar la ejecucion inicial
    //console.log(this.var);
    //console.log(this.var1);
    //Permite inicializar varibles como las instancias de modulos instaladas, por ejemplo:
    //mensaje:MathDialog;
  }
  //Da paso para ejecutar el metodo
  //Carga de inmediato al momento de abrir la pagina
  ngOnInit(): void {
    //this.var1 = this.var1 + 1; //de igual comprobamos la ejecucion inicial
    //console.log(this.var1);
    //console.log(this.var);
    this.ejemploF();
    this.mayorQ();
  }

  //metodo para practicar el for
  nombre: string[] = [];
  nRegistros: number = 0;
  j: boolean = true;
  l: boolean = false;
  ejemploF(){
    for (let y of this.alumnoArray){
      console.log(y);
      console.log(y.edad);
    }
  }

  buscador(){
    //this.j=true? this.j=false : this.j=true;
    this.l==false? this.l=true : this.l=false;
  }

  mayorQ(){
    for (let y of this.alumnoArray){

      y.edad<65? this.x++: this.nRegistros++; //esto es la programacion peresosa
      /*
      if(y.edad<65){
        this.nRegistros++;
      }
      */
    }
  }

/*
  //funcion de suma
  function suma () {
    this.r = this.x + this.y
  }

  function suma1 (a:number, b: number, c: number): number{
    c=a+b;
    return c;
  }
  //Cuando se tiene una variable de tipo idefinida el bufer la memoria se expande,
  //por lo cual es importante definir el tipo de valor.
  let t =suma1 (18,20,8);

  mensaje();
  mensaje1(['Saludoxdxdxdddddd', 'sonso']);
  mensaje2('Saludoxdxdxdddddd');

  function mensaje (){
    console.log("hola");
  }

  function mensaje1 (m: string []){
    console.log(m);
  }
  //si bien, las otras dos funciones son validas,
  //lo ideal para la programacion logica es definir los parametros
  //que se resiven y se devuelven...
  function mensaje2 (m: string): string{
    return "saludo" + m;
  }

  //tarea:
  //tres funciones numericas,
  //uno de texto,
  //y uno boolean.


///////////////////////////---- TAREA 1 ----///////////////////////////
  //ejemplo de funcion numerica 1: simple
  n1: number = 0;
  n2: number = 0;
  multiplicacion() {
    console.log("la multiplicacion de " + this.n1 + " por " + this.n2 + " es: " + this.n1 * this.n2);
  }
  //ejemplo de funcion numerica 2: con parametros
  p1: number = 0;
  media(a: number, b: number, c: number, d: number) {
    this.p1 = (a + b + c + d) / 4;
  }
  //ejemplo de funcion numerica 3: con parametros y retorno
  p2: number = 0;
  regresionLineal(a: number, b: number, c: number, d: number): number {
    this.p2 = (a + b + c + d) / 4;
    return this.p2;
  }

  //ejemplo de funcion de texto: con parametros y retorno
  p3: string = '';
  saludo(a: string, b: string, c: string, d: string): string {
    this.p3 = "Apellido: "+a+" Nombre: "+b+" Edad: "+c+" Telefono: "+d;
    return this.p3;
  }

  //ejemplo de funcion booleana: con parametros y retorno booleanos
  mayor(a: number, b: number): boolean {
    if (a > b) {
      return true;
    } else {
      return false;
    }
  }

*/

  vof: boolean = false;

  //Evaluacion simple:
  evaluacionSimple(){
    if (this.vof==false){
      console.log('falso');
    }else{
      console.log('verdadero');
    }
    if (this.vof){
      console.log("verdadero");
    }else{
      console.log("falso");
    }
  }

  //evaluacion perezoza:
  evaluacionPerezoza(){
    this.vof==false? console.log('falso'):console.log('verdadero');
    this.vof? console.log('verdadero'):console.log('falso');
    //o
    this.vof!=false? console.log('verdadero'):console.log('falso');
    !this.vof? console.log('falso'): console.log('verdadero');;

  }


////////////-----------Tarea 2-----------////////////////////////       //5 ejemplos de metodos con evaluacion peresoza
  //Ejemplo 1:
  contarPares(nume: number[]): number{
    return nume.filter(x => x%2==0).length;
    //filter es un metodo que filtra los datos de un arreglo
    //y los devuelve en un nuevo arreglo, en este caso se filtran los numeros pares
    //y se devuelve la longitud del arreglo de numeros pares
    //el metodo length devuelve la longitud de un arreglo, en este caso el arreglo de numeros pares
  }

  //Ejemplo 2:
  filtrarNombres(nombres: string[], letra: string): string[]{
    return nombres.filter(x => x.charAt(0).toLowerCase()==letra.toLowerCase());
    //el metodo charAt devuelve el caracter de la posicion indicada, en este caso la posicion 0
    //el metodo toLowerCase convierte el caracter en minuscula, en este caso la letra indicada
    //el metodo filter filtra los nombres que empiezan con la letra indicada
    //y devuelve un nuevo arreglo con los nombres que empiezan con la letra indicada
  }
  //Ejemplo 3:
  obtenerPromedio(notas: number[]): number{
    const aprobadas = notas.reduce((acumulador, nota) => nota>=60? acumulador + 1 : acumulador, 0);
    const suma = notas.reduce((acumulador, nota) => nota >= 60 ? acumulador + nota : acumulador, 0);
    return aprobadas>0? suma/aprobadas : 0;
    //el metodo reduce reduce los elementos de un arreglo a un solo valor
    //en este caso se reduce el arreglo de notas a un solo valor, en este caso el promedio
      //primero se reduce el arreglo de notas a un solo valor, en este caso la cantidad de notas aprobadas
      //luego se reduce el arreglo de notas a un solo valor, en este caso la suma de las notas aprobadas
    //luego se devuelve el promedio de las notas aprobadas
    //si no hay notas aprobadas, se devuelve 0
  }
  //Ejemplo 4:
  esPrimo(numero: number): boolean{
    if (numero<=1){
      return false;
    }
    return Array.from(Array(numero).keys()).filter(x => x>1 && x<numero).every(x => numero%x!=0);
    //el metodo from devuelve un arreglo a partir de un objeto iterable, en este caso un arreglo de numeros
    //el metodo keys devuelve un arreglo de las claves de un objeto, en este caso un arreglo de numeros
    //el metodo filter filtra los numeros que son mayores a 1 y menores al numero indicado
    //el metodo every devuelve true si todos los elementos del arreglo cumplen la condicion indicada
    //en este caso devuelve true si todos los numeros del arreglo son diferentes de 0
    //si todos los numeros del arreglo son diferentes de 0, el numero es primo
    //si algun numero del arreglo es 0, el numero no es primo
    //si el numero es menor o igual a 1, el numero no es primo
    //si el numero es primo, se devuelve true
    //si el numero no es primo, se devuelve false
  }
  esPrimo2 (numero: number): boolean {
    return numero<=1 ? false :  Array.from(Array(numero).keys()).filter(x => x>1 && x<numero).every(x => numero%x!=0); 
  }

  
  //Ejemplo 5:
  contarCaracteres(palabras: string[]): number{
    return palabras.reduce((acumulador, palabra) => acumulador + palabra.length, 0);
    //el metodo reduce reduce los elementos de un arreglo a un solo valor
    //en este caso se reduce el arreglo de palabras a un solo valor, en este caso la cantidad de caracteres
    //luego se devuelve la cantidad de caracteres
    //si el arreglo de palabras esta vacio, se devuelve 0

  }
  contarCaracteres2(palabras: string[]): number{
    return palabras.map(x => x.length).reduce((acumulador, palabra) => acumulador + palabra, 0);
    //el metodo map devuelve un nuevo arreglo con los elementos transformados
    //en este caso se devuelve un nuevo arreglo con la longitud de cada palabra
    //el metodo reduce reduce los elementos de un arreglo a un solo valor
    //en este caso se reduce el arreglo de longitudes a un solo valor, en este caso la cantidad de caracteres
    //luego se devuelve la cantidad de caracteres
    //si el arreglo de palabras esta vacio, se devuelve 0
  }




/*
  // Ejemplo 1:
  contarPares(numeros: number[]): number {
    let cantidadPares = 0;
    for (let num of numeros) {
      num % 2 === 0 ? cantidadPares++ : null;
    }
    return cantidadPares;
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cantidadPares = this.contarPares(this.numeros);
  //console.log(this.cantidadPares); // 5
  
  // Ejemplo 2:
  filtrarNombres(nombres: string[], letra: string): string[] {
    const nombresFiltrados: string[] = [];
    for (let nombre of nombres) {
      nombre.charAt(0).toLowerCase() === letra.toLowerCase() ? nombresFiltrados.push(nombre) : null;
    }
    return nombresFiltrados;
  }
  
  const nombres = ['Ana', 'Carlos', 'Elena', 'Pedro', 'Luisa'];
  const nombresFiltrados = this.filtrarNombres(this.nombres, 'A');
  //console.log(nombresFiltrados); // ['Ana']
  
  //Ejemplo 3:
  obtenerPromedio(notas: number[]): number {
    let sumaNotas = 0;
    let cantidadAprobadas = 0;
    for (let nota of notas) {
      nota >= 60 ? (sumaNotas += nota, cantidadAprobadas++) : null;
    }
    return cantidadAprobadas > 0 ? sumaNotas / cantidadAprobadas : 0;
  }
  
  const notas = [80, 70, 55, 90, 65];
  const promedioAprobadas = this.obtenerPromedio(this.notas);
  //console.log(promedioAprobadas); // 78.33333333333333
  
  // Ejemplo 4:
  esPrimo(numero: number): boolean {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const num = 17;
  const es_Primo = this.esPrimo(this.num) ? 'Sí' : 'No';
  //console.log(esPrimo); // 'Sí'
  
  // Ejemplo 5:
  contarCaracteres(palabras: string[]): number {
    let cantidadCaracteres = 0;
    for (let palabra of palabras) {
      cantidadCaracteres += palabra.length;
    }
    return cantidadCaracteres;
  }
  
  const palabras = ['Hola', 'Mundo'];
  const cantidadCaracteres = this.contarCaracteres(this.palabras);
  //console.log(cantidadCaracteres); // 9
  
*/

  


}
//UNA CLASE ES UN ELEMENTO QUE TE PERMITE TRABAJAR CON OTRO ELEMENTOS...
//UNA CLASE PURA ES SOLO CODIGO...

//se puede generar una clase: ng generate class clases/clase1
//la abreviatura seria: ng g cl clases/clase1


