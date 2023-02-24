import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemState } from 'src/app/ngrx/states/item.state';
import * as ItemActions from 'src/app/ngrx/actions/item.action';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  items$: Observable<ItemState>;

  constructor(private store: Store<{item: ItemState }>) {
    this.items$ = this.store.select('item');
    this.store.dispatch(ItemActions.getItems());
    // this.store.dispatch(ItemActions.getItemById({id: 3}));
  }
}
