import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  userIdControl: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private notify: NotificationService

  ) { }

  ngOnInit() {
  }

  verifyUser() {
    this.authService.verifyUserByUserId(this.userIdControl.value)
      .subscribe((res) => {
        if (res.isUserExist) {
          this.router.navigate(['/auth/new-password/', this.userIdControl.value]);
        } else {
          this.notify.showNotification(`${this.userIdControl.value} user does not exist`, 'bottom', 'warning');
        }
        (err) => this.notify.showNotification('Something went wrong', 'bottom', 'error')
      });
  }

}
