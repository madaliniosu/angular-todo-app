import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavToggle implements OnDestroy{
  private breakPointObserver = inject(BreakpointObserver)
  private subscription: Subscription;


  private _isOpen = signal(true);
  private _isMobile = signal(false);
  private _isCollapsed = signal(true);
  
  isOpen = this._isOpen.asReadonly();
  isMobile = this._isMobile.asReadonly();
  isCollapsed = this._isCollapsed.asReadonly();

  constructor() {
    this.subscription = this.breakPointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((screenSize) => {
        this._isMobile.set(screenSize.matches);

        //  on mobile
        if (screenSize.matches) {
          this._isCollapsed.set(false);
          this._isOpen.set(false);
          // not on mobile
        } else {
          this._isCollapsed.set(false)
        }
      });
  }

  toggle() {
    if(this.isMobile()){
      this._isOpen.update(open => !open);
    }else {
      this._isCollapsed.update(collapsed => !collapsed);
    }
  }

  open() { this._isOpen.set(true); }
  close() { this._isOpen.set(false); }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
