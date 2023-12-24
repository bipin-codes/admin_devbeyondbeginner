import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categories';
import blogsReducer from './slices/blogs';
import commentReducer from './slices/comments';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        blogs: blogsReducer,
        comments: commentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
