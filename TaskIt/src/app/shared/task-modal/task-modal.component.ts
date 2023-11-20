import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {
  showTaskModalComponent = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
      this.sharedService.buttonClick$.subscribe(()=> {
        this.showTaskModalComponent = true;
      })
  }

}
