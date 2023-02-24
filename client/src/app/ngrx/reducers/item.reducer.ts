import { createReducer, on } from '@ngrx/store';
import { ItemState, ItemStateById } from '../states/item.state';
import * as ItemActions from '../actions/item.action';

let initialState = <ItemState>{
  items: [],
  loading: false,
  error: '',
  isSuccessful: false,
};

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.getItems, (state) => {
    return {
      ...state,
      items: [],
      loading: true,
      error: '',
      isSuccessful: false,
    };
  }),
  on(ItemActions.getItemSuccess, (state, { items }) => {
    return {
      ...state,
      items: items,
      loading: false,
      error: '',
      isSuccessful: true,
    };
  }),
  on(ItemActions.getItemFailure, (state, { error }) => {
    return {
      ...state,
      items: [],
      loading: false,
      error: error,
      isSuccessful: false,
    };
  })
);

let initialStateById = <ItemStateById>{
  item: {},
  loading: false,
  error: '',
  isSuccessful: false,
};

export const itemReducerByid = createReducer(
  initialStateById,
  on(ItemActions.getItemById, (state) => {
    return {
      ...state,
      items: {},
      loading: true,
      error: '',
      isSuccessful: false,
    };
  }),
  on(ItemActions.getItemByIdSuccess, (state, { item }) => {
    return {
      ...state,
      items: item,
      loading: false,
      error: '',
      isSuccessful: true,
    };
  }),
  on(ItemActions.getItemFailure, (state, { error }) => {
    return {
      ...state,
      items: {},
      loading: false,
      error: error,
      isSuccessful: false,
    };
  })
);
