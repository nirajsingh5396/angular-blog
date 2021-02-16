import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BlogsService } from '../blogs.service';
import { Blogs } from '../models/blogs.model';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  title: string;
  blog: Blogs;

  constructor(
    private activedRoute: ActivatedRoute,
    private blogService: BlogsService,
    private notity: NotificationService
  ) { }

  ngOnInit() {
    this.title = this.activedRoute.snapshot.paramMap.get('id');
    this.getBlog(this.title)
  }

  getBlog(title: string) {
    this.blogService.getBlogByTitle(this.title).subscribe(blog => {
      if (blog) {
        this.blog = blog;
      }
    }, (err) => {
      this.notity.showNotification('Something went wrong', 'top', 'error');
    })
  }

}
