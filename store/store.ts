// store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import artworkReducer from './slices/artworkSlice';
import galleryReducer from './slices/gallerySlice';
import cartReducer from './slices/cartSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
    reducer: {
        artwork: artworkReducer,
        gallery: galleryReducer,
        cart: cartReducer,
        ui: uiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
