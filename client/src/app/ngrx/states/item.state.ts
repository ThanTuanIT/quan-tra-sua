import { ItemModel } from "src/app/models/item.model";

export interface ItemState {
    items: ItemModel[];
    loading: boolean;
    error: string;
    isSuccessful: boolean;
}

export interface ItemStateById {
    item: ItemModel;
    loading: boolean;
    error: string;
    isSuccessful: boolean;
}