import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

   messageSuccess(message: string, title: string) {
    this.toastr.success(message, title)
  }

  messageWarning(message: string, title: string) {
    this.toastr.warning(message, title)
  }

  messageError(message: string, title: string) {
    this.toastr.error(message, title)
  }

  messageInfo(message: string, title: string) {
    this.toastr.info(message, title)
  }
}
