import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];

  constructor(private cursosService: CursosService) {
    this.cursosService.getCursos()
      .subscribe(cursos => {
        this.cursos= [];
        for (const id$ in cursos) {
          const p = cursos[id$];
          p.id$ = id$;
          this.cursos.push(cursos[id$]);
        }
      })
  }

  ngOnInit() {

  }

  eliminarCurso(id$) {
    this.cursosService.delCurso(id$)
      .subscribe(res => {
        this.cursos = [];
        this.cursosService.getCursos()
          .subscribe(cursos => {
            for (const id$ in cursos) {
              const p = cursos[id$];
              p.id$ = id$;
              this.cursos.push(cursos[id$]);
            }
          })
      })

  }

}
