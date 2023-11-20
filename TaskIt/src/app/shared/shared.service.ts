import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private buttonClickSource = new BehaviorSubject<boolean>(false);

  buttonClick$=this.buttonClickSource.asObservable();

  triggerButtonClick(value: boolean){
    this.buttonClickSource.next(value);
  }

  constructor() { }
}
