import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { SidenavToggle } from '../../services/sidenav-toggle.service';
import { MatListModule } from '@angular/material/list';
import { TodoTable } from '../todo-table/todo-table';
import { NavButtons, Filter } from '../nav-buttons/nav-buttons';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  completed?: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', completed: true },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', completed: true },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', completed: false },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', completed: true },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', completed: false },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', completed: true },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', completed: false },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', completed: false },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', completed: true },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', completed: false },
];

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    TodoTable,
    NavButtons,
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {
  sidenavToggle = inject(SidenavToggle);
  activeFilter: Filter = 'All';

  get filteredData(): PeriodicElement[] {
    switch (this.activeFilter) {
      case 'Open':      return ELEMENT_DATA.filter(e => !e.completed);
      case 'Completed': return ELEMENT_DATA.filter(e => e.completed);
      default:          return ELEMENT_DATA;
    }
  }
}
