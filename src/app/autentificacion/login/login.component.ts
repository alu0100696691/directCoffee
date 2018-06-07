import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutentificacionService } from '../../servicios/autentificacion.service'; 
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: any;

  mensaje = false;


  constructor(private formBuilder: FormBuilder,
              private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({      
      email: ['', [Validators.required, Validators.minLength(8), Validators.email] ],
      password: ['', [Validators.required,
                      Validators.minLength(8),
                      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')] ]
    });
  }

  loginUsuario() {
    this.login = this.setearLogin();
    this.autentificacionService.inicioSesion(this.login); 
    setTimeout(()=> {
      if(this.isAuth() === false) {
        this.mensaje=true;
      }
    }, 2000);   
  }

  setearLogin() {
    const salvarLogin = {      
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,     
    }
    return salvarLogin;
  }

  isAuth() {
    return this.autentificacionService.isAuthenticated();
  }

}
