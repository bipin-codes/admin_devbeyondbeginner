import { ICategory } from 'app/slices/categories/types';

export interface IListItemProps<T> {
    item: T;
    onEditHandler: (oldVal: T, newVal: T) => void;
    onDeleteHandler: (item: T) => void;
}
export type IListItem = string | ICategory;
