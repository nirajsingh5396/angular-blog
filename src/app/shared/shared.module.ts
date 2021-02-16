import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NoDataComponent } from './components/no-data/no-data.component';
import { MaterialModule } from './modules/material-module';

import { NotificationService } from './services/notification.service';
import { ConfirmEqualValidatorDirective } from './helpers/confirmPasswordValidation';
import { ConfirmationAlertComponent } from './components/confirmation-alert/confirmation-alert.component';


@NgModule({
  declarations: [
    NoDataComponent,
    ConfirmEqualValidatorDirective,
    ConfirmationAlertComponent
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
    ConfirmationAlertComponent,
    MaterialModule,
  ],
  providers: [NotificationService],
  entryComponents: [ConfirmationAlertComponent]
})
export class SharedModule { }
