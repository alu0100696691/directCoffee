import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import * as Rx from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  curURL = 'https://directcoffee-e9c84.firebaseio.com/cursos.json';


  constructor(private http: Http) { }

postCurso(curso:any) {
  const newCurso = JSON.stringify(curso);
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  return this.http.post( this.curURL, newCurso, {headers})
    .map( res => {
      console.log(res.json());
      return res.json();
    })
}

getCurso() {
  return this.http.get( this.curURL )
    .map(
      res => res.json()
    )
}

}

