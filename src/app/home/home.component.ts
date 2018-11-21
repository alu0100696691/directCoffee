import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service'; 
import { ProjectService } from '../servicios/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: any[] = [];
  
  constructor(private autentificacionService: AutentificacionService,
    private projectService: ProjectService) { 
      this.projectService.getProjects()
           .subscribe(projects => {
             for (const id$ in projects) {
               const p = projects[id$];
               p.id$ = id$;
               this.projects.push(projects[id$]);
             }
           })
    }

  ngOnInit() {
  }

  isAuth() {
    return this.autentificacionService.isAuthenticated();
  }

}
