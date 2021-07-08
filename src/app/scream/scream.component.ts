import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scream',
  templateUrl: './scream.component.html',
  styleUrls: ['./scream.component.css']
})
export class ScreamComponent implements OnInit {

  white = 'white';
  black = 'black';

  constructor() { }

  ngOnInit(): void {
    let audio = new Audio();
    audio.src = "../../assets/scream.mp3";
    audio.load();
    audio.play();
  }

  randomSeed() {
  }

}
