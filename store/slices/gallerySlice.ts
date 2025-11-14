import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GalleryFilters {
    category: string;
    sortBy: string;
    searchQuery: string;
    priceRange: [number, number];
}

interface Pagination {
    page: number;
    limit: number;
    total: number;
}

interface GalleryState {
    filters: GalleryFilters;
    pagination: Pagination;
    viewType: 'grid' | 'list';
}

const initialState: GalleryState = {
    filters: {
        category: '',
        sortBy: 'latest',
        searchQuery: '',
        priceRange: [0, 1000],
    },
    pagination: {
        page: 1,
        limit: 10,
        total: 0,
    },
    viewType: 'grid',
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            state.filters.category = action.payload;
        },
        setSortBy(state, action: PayloadAction<string>) {
            state.filters.sortBy = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.filters.searchQuery = action.payload;
        },
        setPriceRange(state, action: PayloadAction<[number, number]>) {
            state.filters.priceRange = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.pagination.page = action.payload;
        },
        setTotal(state, action: PayloadAction<number>) {
            state.pagination.total = action.payload;
        },
        setView(state, action: PayloadAction<'grid' | 'list'>) {
            state.viewType = action.payload;
        },
        resetFilters(state) {
            state.filters = initialState.filters;
            state.pagination.page = initialState.pagination.page;
            state.pagination.total = initialState.pagination.total;
            state.viewType = initialState.viewType;
        },
    },
});

export const { setCategory, setSortBy, setSearchQuery, setPriceRange, setPage, setTotal, setView, resetFilters } = gallerySlice.actions;

export default gallerySlice.reducer;