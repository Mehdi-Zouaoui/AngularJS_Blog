import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../services/post.service.";
import {Subscription} from "rxjs";
import {PostModel} from "../models/post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './post_component.html',
  styleUrls: ['./post_component.scss']
})
export class PostComponent implements OnInit , OnDestroy{

  @Input() postIndex: number;
  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postDate: string;

  post: PostModel[];
  postsSubscription: Subscription

  constructor(private postService: PostService , private  router : Router) {
  }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: PostModel[]) => {
        this.post = posts;
      }
    );
    this.postService.emitPostSubject();
  }
  onNewPost(){
    this.router.navigate(['/posts' ,'new']);
  }
  onDeletePost(post :PostModel){
    this.postService.removePost(post);
  }
  onViewPost(id : number){
    this.router.navigate(['/posts' ,'view' , id])
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

}


