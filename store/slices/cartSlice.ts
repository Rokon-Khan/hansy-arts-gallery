import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../types/cart.types';
import { Artwork } from '../types/artwork.types';

const initialState: CartState = {
    items: [],
    total: 0,
    itemCount: 0,
};

const calculateTotal = (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const calculateItemCount = (items: CartItem[]): number => {
    return items.reduce((count, item) => count + item.quantity, 0);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Artwork>) {
            const artwork = action.payload;
            const existingItem = state.items.find(item => item.artworkId === artwork.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const newItem: CartItem = {
                    id: `cart-${artwork.id}-${Date.now()}`,
                    artworkId: artwork.id,
                    title: artwork.title,
                    artist: artwork.artist,
                    price: artwork.price,
                    imageUrl: artwork.imageUrl,
                    quantity: 1,
                };
                state.items.push(newItem);
            }

            state.total = calculateTotal(state.items);
            state.itemCount = calculateItemCount(state.items);
        },

        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.total = calculateTotal(state.items);
            state.itemCount = calculateItemCount(state.items);
        },

        updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item && quantity > 0) {
                item.quantity = quantity;
                state.total = calculateTotal(state.items);
                state.itemCount = calculateItemCount(state.items);
            } else if (item && quantity <= 0) {
                // Remove item if quantity is 0 or negative
                state.items = state.items.filter(item => item.id !== id);
                state.total = calculateTotal(state.items);
                state.itemCount = calculateItemCount(state.items);
            }
        },

        clearCart(state) {
            state.items = [];
            state.total = 0;
            state.itemCount = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
