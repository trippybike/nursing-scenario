import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ChangeResponseService {
  invokeResponseSelection = new EventEmitter<any>();

  onResponseButtonClick(response: string): void {
    this.invokeResponseSelection.emit(response);
  }
}
