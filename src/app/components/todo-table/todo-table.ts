import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Filter } from '../nav-buttons/nav-buttons';
import { PeriodicElement } from '../sidenav/sidenav';

@Component({
  selector: 'app-todo-table',
  imports: [MatTableModule],
  templateUrl: './todo-table.html',
  styleUrl: './todo-table.css',
})
export class TodoTable {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'completed'];
  filter = input<Filter>('All');
  dataSource = input<PeriodicElement[]>([]);
}
