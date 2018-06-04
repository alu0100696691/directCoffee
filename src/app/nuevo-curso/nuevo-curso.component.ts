import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  cursoForm: FormGroup;
  curso: any;

  constructor(private pf: FormBuilder) { }

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
