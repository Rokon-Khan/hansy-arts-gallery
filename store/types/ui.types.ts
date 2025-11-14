// store/types/ui.types.ts

export type Theme = 'light' | 'dark' | 'system';

export interface UIState {
    theme: Theme;
    isMobileMenuOpen: boolean;
    isCartOpen: boolean;
    activeModal: string | null;
}
