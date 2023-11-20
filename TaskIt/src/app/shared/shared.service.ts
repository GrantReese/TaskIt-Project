import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private buttonClickSource = new Subject<void>();

  buttonClick$=this.buttonClickSource.asObservable();

  triggerButtonClick(){
    this.buttonClickSource.next();
  }

  constructor() { }
}
