import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignInComponentRes, SignInContext, SignUpContext } from './models/sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  regsiteredUser: SignUpContext[] = [];

  constructor(private httpClient: HttpClient) { }

  signIn(signnContext: SignInContext): Observable<SignInComponentRes> {
    const SignInComponentRes: SignInComponentRes = {
      authenticatedUser: null,
      authenticated: false,
      tokon: null,
      message: null
    };
    const isUserExist = this.regsiteredUser.find((user) => user.userId === signnContext.userId && user.confirmPassword === signnContext.password);

    if (!!isUserExist) {
      SignInComponentRes.authenticatedUser = isUserExist.userId;
      SignInComponentRes.authenticated = true;
      SignInComponentRes.tokon = '1ewqqqqweerrtyuuiopasdfghjklnvcxzdeegg6577hgdewwe27hdfyjdjuyeus',
        SignInComponentRes.message = 'login successful!'
    } else {
      SignInComponentRes.message = 'Invalid credentials!';
    }
    return of(SignInComponentRes);
  }

  signUp(user: SignUpContext): Observable<any> {
    if (!user) {
      return of({ isRegisteredUser: false });
    }
    this.regsiteredUser.push(user);
    return of({ isRegisteredUser: true });
  }


  verifyUserByUserId(userId: string): Observable<any> {
    const userFound = this.regsiteredUser.find(user => user.userId.trim() === userId.trim());
    if (!userFound) {
      return of({ isUserExist: false });
    }
    return of({ isUserExist: true });
  }



}
