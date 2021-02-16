import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NoDataComponent } from './components/no-data/no-data.component';
import { MaterialModule } from './modules/material-module';

import { NotificationService } from './services/notification.service';
import { ConfirmEqualValidatorDirective } from './helpers/confirmPasswordValidation';


@NgModule({
  declarations: [
    NoDataComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NoDataComponent,
    ConfirmEqualValidatorDirective,
    MaterialModule,
  ],
  providers: [NotificationService]
})
export class SharedModule { }
