import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AutentificacionService } from '../servicios/autentificacion.service'; 

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private autentificacionService: AutentificacionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autentificacionService.isAuthenticated();
  }
}
