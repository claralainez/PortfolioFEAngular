import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { DesplegableComponent } from './componentes/desplegable/desplegable.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    DesplegableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
