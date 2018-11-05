import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html'
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number = 0;
  @Input() created_at:Date;
  @Input() love: string;
  onLoveIts() {
    this.loveIts++;
    this.getColor();
  }
  onDontLoveIts() {
    this.loveIts--;
    this.getColor();
  }  
  getColor(){
        if(this.loveIts > 0) 
        {
          return this.love='green';
        } 
        else if(this.loveIts < 0) 
        {
          return this.love='red';
        } 
        else 
        {
          return this.love = 'black';
        }
  }
  
  ngOnInit() {
  } 
  constructor() { }

}

