import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBg8Q7p_EFacFa3MKEC1Vm21JjPDOjRRCQ",
      authDomain: "directcoffee-e9c84.firebaseapp.com"
    })
  }
}
