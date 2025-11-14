// store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import artworkReducer from './slices/artworkSlice';
import galleryReducer from './slices/gallerySlice';

export const store = configureStore({
    reducer: {
        artwork: artworkReducer,
        gallery: galleryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
