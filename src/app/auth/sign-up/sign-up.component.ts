import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from '../auth.service';
import { SignUpContext } from '../models/sign-in.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  authSignupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notify: NotificationService
  ) { }
  ngOnInit() {
    this.buildSignupForm();
  }

  buildSignupForm() {
    this.authSignupForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      userId: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  authSignUPFormSubmission() {
    if (!this.authSignupForm.valid) {
      return;
    }
    const signUpFormValue = this.authSignupForm.value;
    delete signUpFormValue.password;
    const signUpForReq = signUpFormValue as SignUpContext;
    this.authService.signUp(signUpForReq)
      .subscribe((res) => {
        console.log(res);
        if (res.isRegisteredUser) {
          this.notify.showNotification('User registered successfully!', 'top', 'success');
          this.router.navigate(['/auth/sign-in']);
        }
      }, (err) => this.notify.showNotification('Something went wrong', 'bottom', 'error'));
  }

  getErrorMessageForConfirmPassword() {
    if (this.authSignupForm.controls.confirmPassword.hasError('required')) {
      return 'Confirm password is required';
    } if (this.authSignupForm.controls.confirmPassword.hasError('notSame')) {
      return 'Password and confirm password does not match';
    }

  }

}
