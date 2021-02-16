import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BlogsService } from '../blogs.service';
import { Blogs } from '../models/blogs.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  @Input() blog: Blogs;
  @Input() title: string;
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
      title: [!!this.blog ? this.blog.title : null, [Validators.required], this.checkTitleExstence.bind(this)],
      subTitle: [!!this.blog ? this.blog.subTitle : null, [Validators.required]],
      desc: [!!this.blog ? this.blog.desc : null, [Validators.required]],
    });
  }

  addBlogSubmission() {
    if (!this.addBlogForm.valid) {
      return;
    }
    const blog = this.addBlogForm.value as Blogs;

    if (!!this.title) {
      return this.updateBlog(blog)
    }
    this.blogService.createBlog(blog)
      .subscribe((res) => {
        if (res.createdBlog) {
          this.notify.showNotification('Blog created successfully!', 'top', 'success');
          this.router.navigate(['/blogs/list']);
        }
      }, (err) => this.notify.showNotification('Something went wrong', 'bottom', 'error'));
  }

  updateBlog(blog: Blogs) {
    this.blogService.updateBlog(blog)
      .subscribe((res) => {
        if (res.updatedBlog) {
          this.notify.showNotification('Blog updated successfully!', 'top', 'success');
          this.router.navigate(['/blogs/list']);
        }
      }, (err) => this.notify.showNotification('Something went wrong', 'bottom', 'error'));
  }

  getTitleErrormsg(){
    if (this.addBlogForm.controls.title.hasError('required')) {
      return 'Title is required';
    } if (this.addBlogForm.controls.title.hasError('existingTitle')) {
      return 'Title already exists';
    }
  }

  checkTitleExstence(emailControl: FormControl): Observable<any> {
    if(!!this.title){
      return of(null);
    }
    const title = emailControl.value;
    return this.blogService.getBlogByTitle(title)
      .pipe(
        map(blog => {
          if (blog) {
            return { existingTitle: true }
          } else {
            return null;
          }
        })
      );
  }

}
