import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foots',
  templateUrl: './foots.component.html',
  styleUrls: ['./foots.component.css']
})
export class FootsComponent {

  @Input() jp:number=0;

  @Input() contH:number=0;
  @Input() contM:number=0;
  @Input() contE:number=0;

}
