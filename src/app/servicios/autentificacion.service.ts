import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

registroUsuario(userdata) {
  firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
    .catch(error => {
      console.log(error);
    })
}

inicioSesion(userdata) {
  firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
    .then( response => {
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(
      error => {
        console.log(error);
      }  
    )

}

isAuthenticated() {
  const user = firebase.auth().currentUser;
  if(user) {
    return true;    
  } else {
    return false;
  }
}

logout() {
  firebase.auth().signOut();
}

getCurrentUser() {
  return firebase.auth().currentUser;
}

}
