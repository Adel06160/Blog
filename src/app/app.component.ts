import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  createdAt=new Date();
  posts:any = [
    { 
      title : 'Mon premier post',
      content: 'Bla1',
      loveIts: 1,
      created_at:this.createdAt
    },
    {
      title : 'Mon deuxième post',
      content: 'Bla12',
      loveIts: -1,
      created_at:this.createdAt
    },
    {
      title : 'Encore un post',
      content: 'Bla13',
      loveIts: 0,
      created_at:this.createdAt
    }
  ];
  
}