import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavToggle {
  private _isOpen = signal(true);
  isOpen = this._isOpen.asReadonly();

  toggle() {
    this._isOpen.update(open => !open);
  }

  open() { this._isOpen.set(true); }
  close() { this._isOpen.set(false); }
}
