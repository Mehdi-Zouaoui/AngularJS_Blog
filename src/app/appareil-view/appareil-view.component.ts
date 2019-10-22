import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service.';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth : boolean = false ;

  posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.posts;
    console.log(this);
  }


}
