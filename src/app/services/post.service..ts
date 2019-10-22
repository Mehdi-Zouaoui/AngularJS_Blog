import { Subject } from 'rxjs';
export class PostService{

  postsSubject = new Subject<any[]>();
  private posts = [
    {

      title: 'Bijour',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo officiis rem sint? Dicta doloremque, possimus.\n',
      loveIts: '0',
       created_at: new Date(),

    },
    {
      title: 'Toz',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nemo officiis rem sint? Dicta doloremque, possimus.\n',
      loveIts: '0',
      created_at: new Date(),

    }
  ];

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



}
