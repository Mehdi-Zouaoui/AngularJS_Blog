import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../services/post.service.";

@Component({
  selector: 'app-posts',
  templateUrl: './post_component.html',
  styleUrls: ['./post_component.scss']
})
export class PostComponent implements OnInit {

  @Input() postIndex: number;
  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLikes : number ;
  @Input() postDate :string;


  constructor(private postService: PostService) {
  }

  ngOnInit() {

  }
  likeCounter = function () {
    this.postService.onLike(this.postIndex);


  }
  dislikeCounter = function(){
    this.postService.onDislike(this.postIndex);
  }

}


