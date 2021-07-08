import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-fogo-doom',
  templateUrl: './fogo-doom.component.html',
  styleUrls: ['./fogo-doom.component.css']
})
export class FogoDoomComponent implements OnInit {

  fireColorsPalette = [
    {"r":7,"g":7,"b":7},
    {"r":31,"g":7,"b":7},
    {"r":47,"g":15,"b":7},
    {"r":71,"g":15,"b":7},
    {"r":87,"g":23,"b":7},
    {"r":103,"g":31,"b":7},
    {"r":119,"g":31,"b":7},
    {"r":143,"g":39,"b":7},
    {"r":159,"g":47,"b":7},
    {"r":175,"g":63,"b":7},
    {"r":191,"g":71,"b":7},
    {"r":199,"g":71,"b":7},
    {"r":223,"g":79,"b":7},
    {"r":223,"g":87,"b":7},
    {"r":223,"g":87,"b":7},
    {"r":215,"g":95,"b":7},
    {"r":215,"g":95,"b":7},
    {"r":215,"g":103,"b":15},
    {"r":207,"g":111,"b":15},
    {"r":207,"g":119,"b":15},
    {"r":207,"g":127,"b":15},
    {"r":207,"g":135,"b":23},
    {"r":199,"g":135,"b":23},
    {"r":199,"g":143,"b":23},
    {"r":199,"g":151,"b":31},
    {"r":191,"g":159,"b":31},
    {"r":191,"g":159,"b":31},
    {"r":191,"g":167,"b":39},
    {"r":191,"g":167,"b":39},
    {"r":191,"g":175,"b":47},
    {"r":183,"g":175,"b":47},
    {"r":183,"g":183,"b":47},
    {"r":183,"g":183,"b":55},
    {"r":207,"g":207,"b":111},
    {"r":223,"g":223,"b":159},
    {"r":239,"g":239,"b":199},
    {"r":255,"g":255,"b":255}
  ];

  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  fireWidth = 260;
  fireHeight = 50;
  firePixelsArray: number[] = [];
  rows: number[] = [];
  columns: number[] = [];

  constructor() { 
    this.setFireDimensions();
    for (let i = 0; i < this.fireHeight; i++) {
      this.rows.push(i);
    }
    for (let i = 0; i < this.fireWidth; i++) {
      this.columns.push(i);
    }
    this.createFireDataStructure();
    this.createFireSource();
    setInterval(() => this.calculateFirePropagation(), 50);
  }
  
  ngOnInit(): void { }

  createFireDataStructure(): void {
    const numberOfPixels = this.fireWidth * this.fireHeight;
    for (let i = 0; i < numberOfPixels; i++) {
      this.firePixelsArray[i] = 0;
    }
  }

  createFireSource(): void {
    for (let column = 0; column <= this.fireWidth; column++) {
      const overFlowPixelIndex = this.fireWidth * this.fireHeight;
      const pixelIndex = (overFlowPixelIndex - this.fireWidth) + column;

      this.firePixelsArray[pixelIndex] = 36;
    }
  }

  calculateFirePropagation(): void {
    for (let column = 0; column < this.fireWidth; column++) {
      for (let row = 0; row < this.fireHeight; row ++) {
        const pixelIndex = column + (this.fireWidth * row);
        this.updateFireIntensityPerPixel(pixelIndex);
      }
    }
  }

  updateFireIntensityPerPixel(currentPixelIndex: number) {
    const decay = Math.floor(Math.random() * 3);
    const belowPixelIndex = currentPixelIndex + this.fireWidth;

    if (belowPixelIndex >= (this.fireWidth * this.fireHeight)) {
      return;
    }

    const belowPixelFireIntensity = this.firePixelsArray[belowPixelIndex];
    const newFireIntensity = (belowPixelFireIntensity - decay) >= 0 ? (belowPixelFireIntensity - decay) : 0;
    this.firePixelsArray[currentPixelIndex - decay] = newFireIntensity;

    const color = this.fireColorsPalette[newFireIntensity];
    const colorString = `${color.r},${color.g},${color.b}`;
    document.getElementById(currentPixelIndex.toString())!.style.backgroundColor = `rgb(${colorString})`;
  }

  setFireDimensions() {
    if(this.vw > 2048) {
      this.fireWidth = 280;
      this.fireHeight = 40;
      return;
    } else if (this.vw > 1920) {
      this.fireWidth = 240;
      this.fireHeight = 40;
      return;
    } else if (this.vw > 1680) {
      this.fireWidth = 200;
      this.fireHeight = 40;
      return;
    } else if (this.vw > 1440 ) {
      this.fireWidth = 180;
      this.fireHeight = 40;
      return;
    } else {
      this.fireWidth = 150;
      this.fireHeight = 40;
      return;
    }
  }

}
