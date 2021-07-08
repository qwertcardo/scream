import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infernal-dialog',
  templateUrl: './infernal-dialog.component.html',
  styleUrls: ['./infernal-dialog.component.css']
})
export class InfernalDialogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  scream() {
    this.router.navigate(['/scream'])
  }

}
