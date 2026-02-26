import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal(false);

  toggle() {
    this.isDark.update(v => !v);
    document.body.style.colorScheme = this.isDark() ? 'dark' : 'light';
  }
}
