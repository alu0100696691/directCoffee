import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: any;

  constructor(private pf: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.pf.group({
      das: ['', [Validators.required, Validators.maxLength(2)] ],
      nombre: ['', [Validators.required, Validators.minLength(8)] ],
      apellidos: ['', [Validators.required, Validators.minLength(8)] ]
    });
  }

  guardarUsuario() {
    this.usuario = this.setearUsuario();
  }

  setearUsuario() {
    const salvarUsuario = {
      das: this.usuarioForm.get('das').value,
      nombre: this.usuarioForm.get('nombre').value,
      apellidos: this.usuarioForm.get('apellidos').value      
    }
    return salvarUsuario;
  }


}
