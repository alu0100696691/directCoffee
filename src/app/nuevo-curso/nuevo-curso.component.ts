import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
      nombre: '',
      descripcion:''
    });
  }

  guardarCurso() {
    this.curso = this.setearCurso();
  }

  setearCurso() {
    const salvarCurso = {
      nombre: this.cursoForm.get('nombre').value,
      descripcion: this.cursoForm.get('descripcion').value
    }
    return salvarCurso;
  }

}
