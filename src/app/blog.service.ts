import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //dummy blog vairable 
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:35.854Z",
      "created": "2017-10-20T12:20:35.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this a blog body",
      "description": "This is a blog 1 description. ",
      "title": "Blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-11-20T12:20:35.854Z",
      "created": "2017-11-20T12:20:35.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this a blog body",
      "description": "This is a blog 2 description. this a very simple blog and we can add anything to it ",
      "title": "Blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2017-11-20T12:20:35.854Z",
      "created": "2017-11-20T12:20:35.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>vishal Chanchal</h1>",
      "description": "This is a blog 2 description. this a very simple blog and we can add anything to it ",
      "title": "vishal"
    }
  ]

  public currentBlog;

  constructor() { }

  //method to return all the blogs
  public getAllBlogs(): any {
    return this.allBlogs;
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    for (let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;
  }
}

