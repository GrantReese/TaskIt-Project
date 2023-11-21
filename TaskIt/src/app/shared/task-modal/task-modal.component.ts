import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {
  constructor(private elementRef: ElementRef){

  }
  ngOnInit(): void {
    const myModal =this.elementRef.nativeElement.querySelector

  }
}
