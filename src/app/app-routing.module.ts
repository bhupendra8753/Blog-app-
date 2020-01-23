import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: "blog/:blogId", component: BlogViewComponent },
    { path: 'create', component: BlogCreateComponent },
    { path: 'edit/:blogId', component: BlogEditComponent },
    { path: '**', component: NotFoundComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
