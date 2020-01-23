import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import observable related code
import { observable, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'ZGVmMjk0NTY1NTgzYTNiNWYwOTY1ODY4MTJhMDRhZTIyZDlmYjBkMDAxNWIxYTFmNWRkZjdiMzM0MDJkYmI3OTkyZWRiMTc3Yzc2YTAwNzViOWUyN2VlMmVmY2E4ODFjNjBlMzQwNmNlNTdmYTk3OWNkNTc5MGRlMWUzYTU4ZWQ3Mw==';

  constructor(private _http: HttpClient) { 
    console.log("blog-http service called");

  }

  //exception handler
  private handleError(err : HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all the blogs
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    return myResponse;
  }

  // create blog
  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }

  // delete blog
  public deleteBlog(blogId): any {
    let data = {};
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;
  }

  // edit blog
  public editBlog(blogId, blogData): any {
    let myResponse = this._http.put(this.baseUrl + '/' + blogId +  '/edit' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }

}
