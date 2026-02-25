import { Component, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';

export type Filter = 'All' | 'Open' | 'Completed';

@Component({
  selector: 'app-nav-buttons',
  imports: [MatListModule],
  templateUrl: './nav-buttons.html',
  styleUrl: './nav-buttons.css',
})
export class NavButtons {
  buttons = ['All', 'Open', 'Completed'];

  filterChange = output<Filter>();
  activeFilter: Filter = 'All';

  select(button: string) {
    this.activeFilter = button as Filter;
    this.filterChange.emit(button as Filter);
  }
}
