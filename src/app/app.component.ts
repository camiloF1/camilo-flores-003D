import { Component } from '@angular/core';
import { HistoriaAlumno } from './modelos/historia-alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alumnosGuardados: Array<HistoriaAlumno> = [];

  public agregarNuevo(nuevo: HistoriaAlumno): void{
    const id: number = this.alumnosGuardados.length + 1;
    nuevo.id = id;
    this.alumnosGuardados.push(nuevo);
  }

  public borrarElemento(pos: number): void{
    this.alumnosGuardados.splice(pos,1);
    console.log('la pos es', pos) //para saber ubicación por consola
  }
}
