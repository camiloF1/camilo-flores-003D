import { Component, Input, Output, EventEmitter,} from '@angular/core';
import { HistoriaAlumno } from 'src/app/modelos/historia-alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent{
  @Input() public alumno!:HistoriaAlumno;
  @Output() public idAlumno = new EventEmitter<number>();
  public emitirId(): void{
    this.idAlumno.emit(this.alumno.id);
  }


}
