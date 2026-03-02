import { Component, inject, Signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TodoStore } from '../../services/todo-store.service';
import { MatIconModule } from '@angular/material/icon';
import { SidenavToggle } from '../../services/sidenav-toggle.service';
import {MatBadgeModule} from '@angular/material/badge';



export type Filter = 'All' | 'Open' | 'Completed';

@Component({
  selector: 'app-nav-buttons',
  imports: [MatListModule, MatIconModule, MatBadgeModule],
  templateUrl: './nav-buttons.html',
  styleUrl: './nav-buttons.css',
})
export class NavButtons {
  private store = inject(TodoStore);
  private sidenavToggle = inject(SidenavToggle)
  readonly activeFilter = this.store.filter;
  readonly buttons: Filter[] = ['All', 'Open', 'Completed'];
  readonly isCollapsed = this.sidenavToggle.isCollapsed

  readonly filterIcons: Record<string, string> = {
    'All': 'language',
    'Open': 'rowing',
    'Completed': 'done_all'
  };

  readonly countMap: Record<Filter, Signal<number>> = {
    'All': this.store.totalCount,
    'Open': this.store.openCount,
    'Completed': this.store.completedCount
  };

  select(button: Filter) {
    this.store.setFilter(button);
  }

}
