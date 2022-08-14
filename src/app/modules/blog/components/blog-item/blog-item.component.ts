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

  editValue: number = 3;
  constructor(private blogService: BlogService) {
    this.blogList = this.blogService.getBlogs();
  }

  ngOnInit(): void {
  }

  deleteAction(index: number) {
    return this.blogList.splice(index, 1);
  }

  editAction(index: number){
  return this.blogList[index].id=this.editValue;
  }
}
