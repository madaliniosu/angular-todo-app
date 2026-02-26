import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
}
