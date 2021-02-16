import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  authNewPasswordForm: FormGroup;
  userId: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notify: NotificationService,
    private activedRoute: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.userId = this.activedRoute.snapshot.paramMap.get('id');
    this.buildNewPasswordForm();
  }

  buildNewPasswordForm() {
    this.authNewPasswordForm = this.formBuilder.group({
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  authNewPasswordFormSubmission() {
    if (!this.authNewPasswordForm.valid) {
      return;
    }
    const newPasswordFormValue = this.authNewPasswordForm.value;
    this.authService.createNewPassword(newPasswordFormValue.confirmPassword, this.userId)
      .subscribe((res) => {
        if (res.passwordReset) {
          this.notify.showNotification('Password changed successfully!', 'top', 'success');
          this.router.navigate(['/auth/sign-in']);
        }
      }, (err) => this.notify.showNotification('Something went wrong', 'bottom', 'error'));
  }

  getErrorMessageForConfirmPassword() {
    if (this.authNewPasswordForm.controls.confirmPassword.hasError('required')) {
      return 'Confirm password is required';
    } if (this.authNewPasswordForm.controls.confirmPassword.hasError('notSame')) {
      return 'Password and confirm password does not match';
    }

  }

}
