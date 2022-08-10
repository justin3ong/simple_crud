import { Injectable } from '@angular/core';
import { Bloginterface } from '../models/bloginterface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Bloginterface[]=[
    {
      id: 1,
      title: "Blog1",
      description: "Comedy",
      author: "Author1",
      comments: ["funny","enjoying"]
  },
  {
      id: 2,
      title: "Blog2",
      description: "Drama",
      author: "Author2",
      comments: ["sad","too dramatic"]
  },
  {
      id: 3,
      title: "Blog3",
      description: "Horror",
      author: "Author4",
      comments: ["thriller","scary","suspense"]
  },
  {
      id: 4,
      title: "Blog4",
      description: "Inspirational",
      author: "Author4",
      comments: ["Motivating","good"]
  }
  ]

  getBlogs(){
    return this.blogs
  }
  constructor() { }
}
