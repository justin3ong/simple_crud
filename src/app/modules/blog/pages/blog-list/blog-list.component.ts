import { Component, Input, OnInit } from '@angular/core';
import { Bloginterface } from '../../models/bloginterface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  @Input () blog:Bloginterface | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
