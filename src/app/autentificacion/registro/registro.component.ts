import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service'; 
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  registro: any;

  constructor(private formBuilder: FormBuilder,
              private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      das: ['', [Validators.required, Validators.maxLength(7)] ],
      nombre: ['', [Validators.required, Validators.minLength(8)] ],
      apellidos: ['', [Validators.required, Validators.minLength(8)] ],
      email: ['', [Validators.required, Validators.minLength(8), Validators.email] ],
      password: ['', [Validators.required,
                      Validators.minLength(8),
                      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')] ]
    });
  }

  guardarRegistro() {
    this.registro = this.setearRegistro();
    this.autentificacionService.registroUsuario(this.registro);
    this.router.navigate['/home'];
    this.registroForm.reset;
  }

  setearRegistro() {
    const salvarRegistro = {
      das: this.registroForm.get('das').value,
      nombre: this.registroForm.get('nombre').value,
      apellidos: this.registroForm.get('apellidos').value, 
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value,     
    }
    return salvarRegistro;
  }

}
