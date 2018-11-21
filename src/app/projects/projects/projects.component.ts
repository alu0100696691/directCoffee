import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../servicios/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private projectService: ProjectService) {
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

  removeProject(id$) {
    this.projectService.delproject(id$)
           .subscribe ( res => {
             this.projects = [];
             this.projectService.getProjects()
                .subscribe(projects => {
                  for (const id$ in projects) {
                    const p = projects[id$];
                    p.id$ = id$;
                    this.projects.push(projects[id$]);
                  }
                })
           })
  }

}
