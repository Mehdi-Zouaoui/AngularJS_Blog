import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostService} from "../services/post.service.";
import {Router} from "@angular/router";
import {PostComponent} from "../post_component/post_component";

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit_post_component.html',
  styleUrls: ['./edit_post_component.scss']
})
export class EditPostComponent implements OnInit {
  neededArea = 'Obligatoire';
  optionalArea ='Faculatatif';
  posts : any[];

  constructor( private postService : PostService ,   private router: Router){
    this.posts = this.postService.posts
}
  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    const title = form.value['title'];
    const content = form.value['content'];
    const date = new Date;
    const likes = '0';
    this.postService.addPost(title,content,date,likes);
    this.router.navigate(['/blog']);
  }
}
