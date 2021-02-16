import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from '../auth.service';
import { SignInContext } from '../models/sign-in.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  authSignInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notify: NotificationService
  ) { }

  ngOnInit() {
    this.buildSigninForm();
  }

  buildSigninForm() {
    this.authSignInForm = this.formBuilder.group({
      userId: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  authSignFormSubmission() {

    if (!this.authSignInForm.valid) {
      return;
    }
    const signnContext = this.authSignInForm.value as SignInContext;
    this.authService.signIn(signnContext)
      .subscribe((signInContextRes) => {
        if (signInContextRes.authenticated) {
          this.router.navigate(['/blogs/list']);
        } else {
          this.notify.showNotification(signInContextRes.message, 'bottom', 'warning');
        }
      }, (err)=> this.notify.showNotification('Something went wrong', 'bottom', 'error'));
  }



}
