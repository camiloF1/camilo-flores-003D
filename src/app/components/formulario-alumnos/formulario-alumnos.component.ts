import { Component, Output, EventEmitter} from '@angular/core';
import { HistoriaAlumno } from 'src/app/modelos/historia-alumno';

@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.scss']
})
export class FormularioAlumnosComponent {
  @Output() public salida = new EventEmitter();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<HistoriaAlumno>();
  public nuevoHistorial: HistoriaAlumno = {
    rut:'',
    nombre:'',
    apellido:'',
    edad:0
  }

  public cambiarNombre (evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
    this.salida.emit();
  }
  public cambiarApellido (evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.apellido = elemento.value;
    this.salida.emit();
  }
  public cambiarRut (evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.rut = elemento.value;
    this.salida.emit();
  }
  public cambiarEdad (evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.edad = elemento.valueAsNumber;
    this.salida.emit();
  }
  public guardarHistorial(): void{
    const copia: HistoriaAlumno={
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorial.nombre='';
    this.nuevoHistorial.apellido='';
    this.nuevoHistorial.rut='';
    this.nuevoHistorial.edad=0;
    this.salida.emit();
  }
}
