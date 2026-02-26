import { Component, inject, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavToggle } from '../../services/sidenav-toggle.service';
import { AddTodo } from '../add-todo/add-todo';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  sidenavToggle = inject(SidenavToggle);
  openModal = output<string>();

  // constructor(private dialog: MatDialog) { }

  // openAddTodoDialog() {
  //   const dialogRef = this.dialog.open(AddTodo, {
  //     width: '600px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log('New todo name:', result); // result is whatever you passed to close()
  //       this.newTodo.emit(result);
  //     }
  //   });
  // }
}
