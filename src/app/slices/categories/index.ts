import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import { ICategory } from './types';

const initialState: Array<ICategory> = [
    { name: 'Testing', id: v4() },
    { name: 'NodeJS', id: v4() },
];

export const categoriesSlice = createSlice({
    name: 'categories',

    initialState,
    reducers: {
        create: (state, action: PayloadAction<ICategory>) => {
            if (
                state.findIndex(
                    (x) =>
                        x.name.toLowerCase() ===
                        action.payload.name.toLowerCase()
                ) != -1
            ) {
                toast.error(
                    `Category ${action.payload.name} is already created!`,
                    { icon: null }
                );
            } else {
                toast.success(
                    `Category '${action.payload.name}' created successfully!`,
                    { icon: null }
                );
                state.push({
                    id: v4(),
                    name: action.payload.name,
                });
            }
        },
        remove: (state, action: PayloadAction<ICategory>) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            if (index !== -1) {
                state = state.splice(index, 1);
                toast.success(
                    `Category '${action.payload.name}' deleted successfully!`,
                    { icon: null }
                );
            }
        },

        update: (state, action: PayloadAction<ICategory>) => {
            const index = state.findIndex(
                (category) => category.id === action.payload.id
            );
            console.log(index, action.payload);

            if (index !== -1) {
                state[index] = action.payload;
                toast.success(
                    `Category ${action.payload.name} updated successfully!`,
                    { icon: null }
                );
            } else {
                toast.error(`No such category exists`);
            }
        },
    },
});

export const { create, remove, update } = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories;

export const selectCategoriesByNames = createSelector(
    selectCategories,
    (data) =>
        data.map((category) => ({
            value: category.name,
            label: category.name,
        }))
);

export default categoriesSlice.reducer;
