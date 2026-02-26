import { Component, inject, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoStore } from '../../services/todo-store.service';
import { MatIconModule } from '@angular/material/icon';

export type Filter = 'All' | 'Open' | 'Completed';

@Component({
  selector: 'app-nav-buttons',
  imports: [MatListModule, MatIconModule],
  templateUrl: './nav-buttons.html',
  styleUrl: './nav-buttons.css',
})
export class NavButtons {
  private store = inject(TodoStore);
  activeFilter = this.store.filter; 
  buttons: Filter[] = ['All', 'Open', 'Completed'];
  readonly filterIcons: Record<string, string> = {
  'All': 'language',
  'Open': 'rowing',
  'Completed': 'done_all'
};

  select(button: Filter) {
    this.store.setFilter(button);
  }
}
