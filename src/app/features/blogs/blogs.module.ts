import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ListOfBlogComponent } from './list-of-blog/list-of-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [BlogsComponent, ListOfBlogComponent, AddBlogComponent, EditBlogComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
