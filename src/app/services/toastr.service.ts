import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<ToastrService>('toastr')

export interface ToastrService {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}
