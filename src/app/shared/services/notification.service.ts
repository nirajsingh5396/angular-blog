import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showNotification(
    message: string,
    verticalPosition: 'top' | 'bottom' = 'top',
    panelClass: 'success' | 'error' | 'warning' | 'green-snackbar' = 'success'
  ) {
    return this.snackBar.open(message, '', { verticalPosition, duration: 5000, panelClass: [panelClass] });
  }
}
