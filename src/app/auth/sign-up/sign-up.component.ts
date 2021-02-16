import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
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
    console.log(signUpForReq);
  }

  getErrorMessageForConfirmPassword() {
    if (this.authSignupForm.controls.confirmPassword.hasError('required')) {
      return 'Confirm password is required';
    } if (this.authSignupForm.controls.confirmPassword.hasError('notSame')) {
      return 'Password and confirm password does not match';
    }

  }

}
