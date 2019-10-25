import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSub: Subscription;
  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const counters = interval(1000);
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;

          this.counterSub = counters.subscribe((value: number) => {
              this.secondes = value;
            },
            (error: any) => {
              console.log('RIP UNE ERREUR EST LA !');
            },
            () => {
              console.log('DONE');
            }
          )

        } else {
          this.isAuth = false;
        }
      }
    );


  }
  ngOnDestroy(): void {
    this.counterSub.unsubscribe();
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
