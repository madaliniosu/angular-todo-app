import { Component, inject, OnDestroy, signal } from '@angular/core';

import { Sidenav } from './components/sidenav/sidenav';
import { Toolbar } from './components/toolbar/toolbar';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [
    Sidenav,
    Toolbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}
