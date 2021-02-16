import { NgModule } from '@angular/core';


import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AuthPageRoutingModule,
    SharedModule
  ],
  declarations: [AuthPage, SignInComponent],
  providers: [AuthService]
})
export class AuthPageModule {}
