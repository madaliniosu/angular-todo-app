import { Component, inject, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoStore } from '../../todo-store';

export type Filter = 'All' | 'Open' | 'Completed';

@Component({
  selector: 'app-nav-buttons',
  imports: [MatListModule],
  templateUrl: './nav-buttons.html',
  styleUrl: './nav-buttons.css',
})
export class NavButtons {
  private store = inject(TodoStore);

  buttons: Filter[] = ['All', 'Open', 'Completed'];

  activeFilter = this.store.filter; // reactive binding

  select(button: Filter) {
    this.store.setFilter(button);
  }
}
