import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubscribedCleanup } from '../types';

@Directive({
  selector: '[subscribed]',
  standalone: false,
})
export class SubscribedDirective implements OnDestroy {
  protected subscriptions: Subscription = new Subscription();
  protected cleanup: SubscribedCleanup[] = [];

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();

    for (const c of this.cleanup) {
      c();
    }

    this.cleanup = [];
  }
}
