import { Component, Input, OnInit } from '@angular/core';
import { Bloginterface } from '../../models/bloginterface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  blogList: Bloginterface[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  getBlogs() {
    this.blogList = this.blogService.getBlogs();
  }

}
