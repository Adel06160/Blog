import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {

  @Input() posts:any[];
  constructor() {
  }

  ngOnInit() {
    
  }
}
