import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  seleccionado(x: Event){
    console.log(parseInt((x.target as HTMLInputElement).value));
  }
}

