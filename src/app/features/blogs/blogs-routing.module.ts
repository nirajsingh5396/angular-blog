import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogsComponent } from './blogs.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ListOfBlogComponent } from './list-of-blog/list-of-blog.component';


const routes: Routes = [
  {
    path: '', 
    component: BlogsComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'blogs', component: ListOfBlogComponent },
      { path: 'create', component: AddBlogComponent },
      { path: 'edit/:id', component: EditBlogComponent },
      { path: ':id', component: BlogsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
