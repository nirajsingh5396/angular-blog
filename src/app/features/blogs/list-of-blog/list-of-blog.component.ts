import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { ConfirmationAlertComponent } from 'src/app/shared/components/confirmation-alert/confirmation-alert.component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BlogsService } from '../blogs.service';
import { Blogs } from '../models/blogs.model';

@Component({
  selector: 'app-list-of-blog',
  templateUrl: './list-of-blog.component.html',
  styleUrls: ['./list-of-blog.component.scss']
})
export class ListOfBlogComponent implements OnInit {
  noDataTitle: string = 'No blog found';
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Blogs>([]);
  displayedColumns: string[] = [
    'id',
    'title',
    'subTitle',
    'desc',
    'action'
  ];

  constructor(
    private blogService: BlogsService,
    private dialog: MatDialog,
    private notify: NotificationService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(blogs => {
      this.dataSource.data = blogs;
      this.dataSource.paginator = this.paginator;
    });
  }

  onDeleteBlog(title: string) {
    const data = { title: 'Are you sure want to delete this Blog?' };
    const dialogRef = this.dialog.open(ConfirmationAlertComponent, { data: data, disableClose: true });
    dialogRef.afterClosed().subscribe((res) => {
      if (res.state === true) {
        this.blogService.deleteBlog(title).subscribe(res => {
          this.notify.showNotification('Blog has been deleted successfully!', 'top', 'error');
          this.getBlogs();
        })
      }
    }, (err) => {
      this.notify.showNotification('Something went wrong', 'top', 'error');
    });

  }
}
