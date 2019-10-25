import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from './services/post.service.';
import {Observable, Subscription} from "rxjs";
import {interval} from "rxjs";
import {take} from "rxjs/operators";
import * as firebase from "firebase";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyA5aft9njb3wY6qBKEbQxsCI1R4_oAK_c0",
      authDomain: "angularblog-587c1.firebaseapp.com",
      databaseURL: "https://angularblog-587c1.firebaseio.com",
      projectId: "angularblog-587c1",
      storageBucket: "angularblog-587c1.appspot.com",
      messagingSenderId: "858695752693",
      appId: "1:858695752693:web:6b717d2b552e5d9090debc",
      measurementId: "G-NX4TG45397"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

  ngOnInit() {



  }
  ngOnDestroy(){

  }



}
