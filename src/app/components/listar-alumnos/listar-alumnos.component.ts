import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HistoriaAlumno } from 'src/app/modelos/historia-alumno';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss']
})
export class ListarAlumnosComponent {
@Input() public alumno: Array<HistoriaAlumno>=[];
@Output() public posIndex = new EventEmitter<number>();

  public escucharId(id:number): void {
  const pos = this.alumno.findIndex((elemento)=>{
  return id === elemento.id;});
  this.posIndex.emit(pos);

  }

}
