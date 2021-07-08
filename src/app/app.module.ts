import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FundoAnimadoComponent } from './components/fundo-animado/fundo-animado.component';
import { FogoDoomComponent } from './components/fogo-doom/fogo-doom.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { InfernalDialogComponent } from './components/infernal-dialog/infernal-dialog.component';
import { ScreamComponent } from './scream/scream.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FundoAnimadoComponent,
    FogoDoomComponent,
    InfernalDialogComponent,
    ScreamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
