import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'src/app/models/item.model';

export const getItems = createAction('[Item] Get Item');

export const getItemSuccess = createAction(
  '[Item] Get Item Success',
  props<{ items: ItemModel[] }>()
);
export const getItemFailure = createAction(
  '[Item] Get Item Failure',
  props<{ error: string }>()
);

export const getItemById = createAction('[Item] Get Item By Id', props<{id: number}>());
export const getItemByIdSuccess = createAction('[Item] Get Item By Id', props<{item: ItemModel}>());