import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';
import { FormularioAlumnosComponent } from './components/formulario-alumnos/formulario-alumnos.component';
import { MostrarAlumnosComponent } from './components/mostrar-alumnos/mostrar-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ListarAlumnosComponent,
    FormularioAlumnosComponent,
    MostrarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
