import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor() { }

registroUsuario(userdata) {
  firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
    .catch(error => {
      console.log(error);
    })
}

}
