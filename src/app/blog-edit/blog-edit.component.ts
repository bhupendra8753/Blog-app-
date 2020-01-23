import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private toastr: ToastrService, private _route:ActivatedRoute, private router:Router, private blogHttpService: BlogHttpService) { }

  ngOnInit() {
    let myBlodId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlodId);
    this.blogHttpService.getSingleBlogInformation(myBlodId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);
      },
      error => {
        console.log("error occured");
        console.log(error.errorMessage);
      }
    )
  }

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('blog edited successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId])
        }, 2000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error("some error occured","Error");
      }
    )
  }

}
