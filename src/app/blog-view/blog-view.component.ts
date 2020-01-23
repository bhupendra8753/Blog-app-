import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  //empty object
  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router,public blogService: BlogService, public blogHttpService: BlogHttpService,private toastr: ToastrService, private location: Location) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("ngOnIt called");
    //getting blogid from the route
    let myBlogId = this._route.snapshot.paramMap.get("blogId");
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.currentBlog);
  }


  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog Deleted Successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error => {
        console.log("Some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error Occured', 'Error');
      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  

}
