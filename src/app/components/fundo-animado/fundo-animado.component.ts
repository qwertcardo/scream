import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfernalDialogComponent } from '../infernal-dialog/infernal-dialog.component';

@Component({
  selector: 'app-fundo-animado',
  templateUrl: './fundo-animado.component.html',
  styleUrls: ['./fundo-animado.component.css']
})
export class FundoAnimadoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(InfernalDialogComponent)
  }

}
