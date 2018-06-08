import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import * as Rx from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursURL = 'https://directcoffee-e9c84.firebaseio.com/cursos.json';
  curURL = 'https://directcoffee-e9c84.firebaseio.com/cursos';

  constructor(private http: Http) { }

postCurso(curso:any) {
  const newCurso = JSON.stringify(curso);
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  return this.http.post( this.cursURL, newCurso, {headers})
    .map( res => {
      console.log(res.json());
      return res.json();
    })
}

getCursos() {
  return this.http.get( this.cursURL )
    .map(
      res => res.json()
    )
}

getCurso(id$: string) {
  const url = `${this.curURL}/${id$}.json`;
  return this.http.get(url)
    .map( res => res.json());
}

putCurso(curso: any, id$: string) {
  const newcur = JSON.stringify(curso);
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const url = `${this.curURL}/${id$}.json`;
  return this.http.put( url, newcur, {headers} )
    .map ( res => {
      console.log(res.json());
      return res.json();
    })
}

delCurso ( id$: string) {
  const url = `${this.curURL}/${id$}.json`;
  return this.http.delete( url )
    .map ( res => res.json());
}

}

