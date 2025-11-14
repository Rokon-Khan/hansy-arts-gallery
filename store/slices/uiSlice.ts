import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState, Theme } from '../types/ui.types';

const initialState: UIState = {
    theme: 'system',
    isMobileMenuOpen: false,
    isCartOpen: false,
    activeModal: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        },
        toggleMobileMenu(state) {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        closeMobileMenu(state) {
            state.isMobileMenuOpen = false;
        },
        openMobileMenu(state) {
            state.isMobileMenuOpen = true;
        },
        toggleCart(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        closeCart(state) {
            state.isCartOpen = false;
        },
        openCart(state) {
            state.isCartOpen = true;
        },
        setActiveModal(state, action: PayloadAction<string | null>) {
            state.activeModal = action.payload;
        },
        closeModal(state) {
            state.activeModal = null;
        },
    },
});

export const {
    setTheme,
    toggleMobileMenu,
    closeMobileMenu,
    openMobileMenu,
    toggleCart,
    closeCart,
    openCart,
    setActiveModal,
    closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;
