// store/types/cart.types.ts

export interface CartItem {
    id: string;
    artworkId: string;
    title: string;
    artist: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    total: number;
    itemCount: number;
}
