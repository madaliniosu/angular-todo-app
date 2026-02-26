import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-todo',
  imports: [MatDialogModule, MatButtonModule, MatInputModule, FormsModule],
  template: `    
  <h2 mat-dialog-title>Add Todo</h2>
    <mat-dialog-content>
      <mat-form-field class="todo-input">
          <textarea matInput placeholder="What are you planning to do?" [(ngModel)]="todo"></textarea>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-button (click)="confirm()">Add</button>
    </mat-dialog-actions>
    `,
  styleUrl: './add-todo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodo {
  todo = '';

  constructor(private dialogRef: MatDialogRef<AddTodo>) { }

  cancel() { this.dialogRef.close(); }
  confirm() { 
    this.dialogRef.close(this.todo);
    console.log('confirm', this.todo);
  }

}
