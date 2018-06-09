import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../servicios/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  cursoForm: FormGroup;
  curso: any;
  id: string;

  constructor(private pf: FormBuilder, 
              private cursoService: CursosService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { 
                this.activatedRouter.params
                  .subscribe( parametros => {
                    this.id = parametros['id'];
                    this.cursoService.getCurso(this.id)
                      .subscribe( curso => this.curso = curso )
                  });
              }

  ngOnInit() {
    this.cursoForm = this.pf.group({
      codigo: ['', [Validators.required, Validators.maxLength(2)] ],
      curso: ['', [Validators.required, Validators.minLength(8)] ],
      plataforma: '',
      contenido: '',
      horas: '',
      comentarios:''
    });
  }

  guardarCurso() {
    this.curso = this.setearCurso();
    this.cursoService.putCurso(this.curso, this.id)
      .subscribe(newcurso => {
        
      })
      this.cursoForm.reset;
      this.router.navigate(['/']);

  }

  setearCurso() {
    const salvarCurso = {
      codigo: this.cursoForm.get('codigo').value,
      curso: this.cursoForm.get('curso').value,
      plataforma: this.cursoForm.get('plataforma').value,
      contenido: this.cursoForm.get('contenido').value,
      horas: this.cursoForm.get('horas').value,
      comentarios: this.cursoForm.get('comentarios').value
    }
    return salvarCurso;
  }

}
