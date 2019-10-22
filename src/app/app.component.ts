import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from './services/post.service.';
import {Observable, Subscription} from "rxjs";
import {interval} from "rxjs";
import {take} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  secondes: number;
  counterSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    const counters = interval(1000);
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


  }
  ngOnDestroy(){
    this.counterSub.unsubscribe();
  }



}
