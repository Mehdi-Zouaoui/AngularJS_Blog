import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../services/post.service.';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit , OnDestroy {
  isAuth: boolean = false;

  posts: any[];
  postsSubscription: Subscription

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe((posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  likeCounter = function () {
    this.postService.onLike(this.postIndex);

  }
  dislikeCounter = function () {
    this.postService.onDislike(this.postIndex);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }
  onSave(){
    this.postService.savePostsToServer();
  }
  onFetch(){
    this.postService.getPostsFromServer();
  }

}
