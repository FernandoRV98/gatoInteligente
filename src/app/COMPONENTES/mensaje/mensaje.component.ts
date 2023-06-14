//import { Dialog } from '@angular/cdk/dialog';
import { Component,Inject, Output, EventEmitter } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {
  texto1:string="Espere...";
  sino1:number=1;
  constructor(
    public dialogRef:MatDialogRef<MensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{texto: string, sino: number})
    {
      this.texto1=data.texto;
      this.sino1=data.sino;
    }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 0;

  @Output() evfoots=new EventEmitter<number>();
  control:number=1;

  cerrar(){
    this.dialogRef.close();
  }
}
