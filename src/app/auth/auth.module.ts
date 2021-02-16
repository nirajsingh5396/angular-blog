import { NgModule } from '@angular/core';


import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    AuthPageRoutingModule,
  ],
  declarations: [AuthPage, SignInComponent],
  providers: [AuthService]
})
export class AuthPageModule {}
