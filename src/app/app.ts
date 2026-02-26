import { Component, inject, OnDestroy, signal } from '@angular/core';

import { Sidenav } from './components/sidenav/sidenav';
import { Toolbar } from './components/toolbar/toolbar';
import { MediaMatcher } from '@angular/cdk/layout';
import { AddTodo } from './components/add-todo/add-todo';
import { MatDialog } from '@angular/material/dialog';
import { TodoStore } from './services/todo-store.service';

@Component({
  selector: 'app-root',
  imports: [
    Sidenav,
    Toolbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  private dialog = inject(MatDialog)
  private store = inject(TodoStore)

  openAddTodoDialog() {
    const dialogRef = this.dialog.open(AddTodo, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New todo name:', result); // result is whatever you passed to close()
        this.store.add(result)
      }
    });
  }

}
