import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Blogs } from './models/blogs.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  blogs: Blogs[] = [];

  getBlogs(): Observable<Blogs[]> {
    return of(this.blogs);
  }

  getBlogByTitle(title: string): Observable<Blogs> {
    const blogFound = this.blogs.find(user => user.title.trim() === title.trim());
    if (!blogFound) {
      return of(null);
    }
    return of(blogFound);
  }

  createBlog(blog: Blogs): Observable<any> {
    if (blog) {
      this.blogs.push(blog);
    }
    return of({ createdBlog: true });
  }

  updateBlog(blog: Blogs): Observable<any> {
    const blogFound = this.blogs.find(x => x.title.trim() === blog.title.trim());
    if (!blogFound) {
      return of(null);
    }
    blogFound.title = blog.title;
    blogFound.subTitle = blog.subTitle;
    blogFound.desc = blog.desc;
    return of({ updatedBlog: true });

  }


  deleteBlog(title: string): Observable<any> {
    const index = this.blogs.findIndex(x => x.title.trim() === title.trim());
    if (index < 0) {
      return of(null);
    }
    this.blogs.splice(index, 1);
    return of({ isDeleted: true });
  }
}
