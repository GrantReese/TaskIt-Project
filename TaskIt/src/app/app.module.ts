import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TaskListComponent,
    KanbanBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
