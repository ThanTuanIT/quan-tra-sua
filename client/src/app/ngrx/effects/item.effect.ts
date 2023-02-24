import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ItemModel } from 'src/app/models/item.model';
import { ApiService } from 'src/app/services/api.service';
import * as ItemActions from '../actions/item.action';

@Injectable()
export class ItemEffects {
  constructor(private apiService: ApiService, private actions$: Actions) {}

  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.getItems),
      switchMap(() =>
        this.apiService.getItems().pipe(
          map((items) =>
            ItemActions.getItemSuccess({ items: <Array<ItemModel>>items })
          ),
          catchError((error) => of(ItemActions.getItemFailure({ error })))
        )
      )
    )
  );

  getItemsById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.getItemById),
      switchMap((action) =>
        this.apiService.getItemById(action.id).pipe(
          map((item) =>
            ItemActions.getItemByIdSuccess({item: <ItemModel>item})
          ),
          catchError((error) => of(ItemActions.getItemFailure({ error })))
        )
      )
    )
  );
}
