import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private autentificacionService: AutentificacionService) { }

  ngOnInit() {
  }

  isAuth() {
    return this.autentificacionService.isAuthenticated();
  }

}
