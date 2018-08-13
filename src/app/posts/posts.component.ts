import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { divFade, listStagger } from '../animations/basic.animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    listStagger,
    divFade
  ]
})
export class PostsComponent implements OnInit {

  posts$: Array<any>;
  users$: Map<number, any>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
    (data) => {
      /* Pega os posts recebidos pela requisiççao salva num vetor temporário e cria um vetor em posts */
      const tempPosts = <Array<any>>data;
      this.posts$ = [];

      /* Pega o id dos usuarios */
      this.users$ = new Map<number, any>();
      for (const post of tempPosts) {
        /* Checa se o usuario já existe na base */
        if (!this.users$.has(post.userId)) {
          /* Pega as informações desse usuario e adiciona o post a lista */
          this.data.getUser(post.userId).subscribe(
            dataUser => {
              post.title = post.title.replace(/^\w/, c => c.toUpperCase());
              this.users$[post.userId] = dataUser;
              this.posts$.push(post);
            }
          );
        } else {
          post.title = post.title.replace(/^\w/, c => c.toUpperCase());
          this.posts$.push(post);
        }
      }

      return;
    });
  }

}
