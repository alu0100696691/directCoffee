import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AutentificacionService } from '../servicios/autentificacion.service';
import * as Rx from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectsURL = 'https://directcoffee-e9c84.firebaseio.com/projects.json';
  proURL = 'https://directcoffee-e9c84.firebaseio.com/projects';

  constructor(private http: Http,
    private autentificacionService: AutentificacionService ) { }

  postProject(project: any){
    const newpro = JSON.stringify(project);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.projectsURL, newpro, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getProjects() {
    return this.http.get( this.projectsURL )
        .map(
          res => res.json()
        );
  }

  getProject(id$: string) {
     const url = `${this.proURL}/${id$}.json`;
     return this.http.get(url)
        .map( res => res.json());
  }

  putProject(project: any, id$: string){
    const newpro = JSON.stringify(project);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.proURL}/${id$}.json`;

    return this.http.put( url, newpro, {headers})
        .map ( res => {
          console.log(res.json());
          return res.json();
        })

  }

  delproject ( id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete( url )
        .map ( res => res.json() );
  }

  getCurrentUser() {
    return this.autentificacionService.getCurrentUser();
  }
  
}

