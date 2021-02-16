import { NgModule } from '@angular/core';


import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    AuthPageRoutingModule,
    SharedModule
  ],
  declarations: [AuthPage, SignInComponent, SignUpComponent],
  providers: [AuthService]
})
export class AuthPageModule {}
