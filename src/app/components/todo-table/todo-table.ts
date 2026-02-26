import { Component, inject, input, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { TodoStore } from '../../services/todo-store.service';
import { Todo } from '../../services/todo-store.service';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-todo-table',
  imports: [MatTableModule, DragDropModule, MatIconModule],
  templateUrl: './todo-table.html',
  styleUrl: './todo-table.css',
})
export class TodoTable {
  @ViewChild('table', { static: true }) table!: MatTable<Todo>;
  private store = inject(TodoStore)

  dataSource = this.store.filteredTodos

  displayedColumns: string[] = ['position', 'input', 'completed'];

  toggle(id: string) {
    this.store.toggle(id);
  }

  delete(id: string) {
    this.store.delete(id);
  }

  edit(id: string, value: string) {
    this.store.edit(id, value);
  }

  trackById(index: number, item: Todo) {
    return item.id;
  }

  drop(event: CdkDragDrop<string>) {
    const previousIndex = this.dataSource().findIndex(d => d === event.item.data);
    console.log('dropping')
    moveItemInArray(this.dataSource(), previousIndex, event.currentIndex);
    this.table.renderRows();
  }


}
