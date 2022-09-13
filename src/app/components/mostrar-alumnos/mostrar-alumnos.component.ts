import { Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-mostrar-alumnos',
  templateUrl: './mostrar-alumnos.component.html',
  styleUrls: ['./mostrar-alumnos.component.scss']
})
export class MostrarAlumnosComponent {
@Input() public mensaje: string = '';
mensajeError: string = 'Alumno no ingresado'
public cambiarAlumno(): void{
  this.mensaje=this.mensajeError;
}

}
