import { Component, inject, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavToggle } from '../../services/sidenav-toggle.service';
import { AddTodo } from '../add-todo/add-todo';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  sidenavToggle = inject(SidenavToggle);
  theme = inject(ThemeService);
  openModal = output<string>();


}
