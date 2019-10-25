import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;
import {PostModel} from "../models/post.model";

@Injectable()
export class PostService{

  postsSubject = new Subject<any[]>();
  posts = [];

   constructor(private httpClient : HttpClient){
     this.getPosts();
   }
  emitPostSubject(){
    this.postsSubject.next(this.posts.slice());
  }
  onLike = function (i:number) {

    console.log('like :',this.posts[i].loveIts=  this.posts[i].loveIts*1 + 1);

  };
  onDislike = function (i:number) {
    console.log("dislike :", this.posts[i].loveIts -= 1);

  };

  addPost(title : string, content: string, date: Date ,likes:string){

    const postObject = {
      title : '',
      content:'',
      loveIts: '0',
      created_at: new Date(),
    }

    postObject.title = title;
    postObject.content = content;
    postObject.loveIts = likes;
    postObject.created_at = date;
    this.posts.push(postObject);

  }
  removePost(post: PostModel){
  const postIndexToRemove = this.posts.findIndex(
    (postEL) => {
      if (postEL === post) {
      return true
    }
    }
  );
  this.posts.splice(postIndexToRemove , 1);
  this.savePostsToServer()
    this.emitPostSubject()
  }
  savePostsToServer(){
    this.httpClient
      .put('https://angularblog-587c1.firebaseio.com/posts.json' , this.posts)
      .subscribe(
        () =>{
          console.log('Enregistrement terminé!');
        },
        (error) =>{
          console.log('Erreur ! :' + error);
        },
        () => {
          console.log("Push Complete")
        }
      )
  }
  getPostsFromServer(){
    this.httpClient
      .get<any[]>('https://angularblog-587c1.firebaseio.com/posts.json')
      .subscribe(
        (response) =>{
          this.posts = response;
          this.emitPostSubject();
          console.log('Données récuperées')
        },
        (error) =>{
          console.log('Erreur ! : ' + error);
        },
        () => {

          console.log('Pull complete')
        }
      )
  }
  getPosts(){
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPostSubject();

    }
      );
  }
  getSinglePosts(id:number){
    return new Promise(
      (resolve , reject) => {
        firebase.database().ref('/books/' + id ).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        )
      }
    )
  }




}
