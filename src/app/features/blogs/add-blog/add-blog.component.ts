import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BlogsService } from '../blogs.service';
import { Blogs } from '../models/blogs.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  addBlogForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogsService,
    private router: Router,
    private notify: NotificationService
  ) { }
  ngOnInit() {
    this.buildBlogForm();
  }

  buildBlogForm() {
    this.addBlogForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      subTitle: [null, [Validators.required]],
      desc: [null, [Validators.required]],
    });
  }

  addBlogSubmission() {
    if (!this.addBlogForm.valid) {
      return;
    }
    const blog = this.addBlogForm.value as Blogs;
    this.blogService.createBlog(blog)
      .subscribe((res) => {
        console.log(res);
        if (res.createdBlog) {
          this.notify.showNotification('Blog created successfully!', 'top', 'success');
          this.router.navigate(['/blogs/list']);
        }
      }, (err) => this.notify.showNotification('Something went wrong', 'bottom', 'error'));
  }

}
