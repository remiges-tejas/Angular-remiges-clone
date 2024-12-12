import { Injectable } from '@angular/core';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(msg: string): void {
    if (!environment.production) {
      console.log(msg);
    }
  }
}
