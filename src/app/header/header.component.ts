import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user : any;

  constructor(private autentificacionService: AutentificacionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    //if(this.isAuth()) {
      //this.user = autentificacionService.getCurrentUser().email;
    //}
  }

  ngOnInit() {
  }

  isAuth() {
    return this.autentificacionService.isAuthenticated();
  }

  onLogout(){
    this.autentificacionService.logout();
    this.router.navigate(['/home']);
  }

}
