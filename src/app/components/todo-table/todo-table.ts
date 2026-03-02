import { Component, inject, input, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { TodoStore } from '../../services/todo-store.service';
import { Todo } from '../../services/todo-store.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-todo-table',
  imports: [MatTableModule, DragDropModule, MatIconModule, MatButtonModule],
  templateUrl: './todo-table.html',
  styleUrl: './todo-table.css',
})
export class TodoTable {
  @ViewChild('table', { static: true }) table!: MatTable<Todo>;
  private store = inject(TodoStore)

  dataSource = this.store.filteredTodos

  displayedColumns: string[] = ['position', 'input', 'completed', 'delete'];

  toggle(id: string) {
    this.store.toggle(id);
  }

  delete(id: string) {
    this.store.delete(id);
  }

  trackById(index: number, item: Todo) {
    return item.id;
  }
  
  drop(event: CdkDragDrop<string>) {
    const draggedTodo = event.item.data as Todo;
    const allTodos = this.store.todos(); // full unfiltered list
    const previousIndex = allTodos.findIndex(d => d.id === draggedTodo.id);
    this.store.reorder(previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
