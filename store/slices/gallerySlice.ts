import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GalleryState, SortOption } from '../types/gallery.types';

const initialState: GalleryState = {
    filters: {
        category: 'all',
        sortBy: 'latest',
        searchQuery: '',
        priceRange: [0, 10000],
        availability: 'all',
        medium: '',
    },
    pagination: {
        page: 1,
        limit: 12,
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
            state.pagination.page = 1; // Reset to first page on filter change
        },
        setSortBy(state, action: PayloadAction<SortOption>) {
            state.filters.sortBy = action.payload;
            state.pagination.page = 1;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.filters.searchQuery = action.payload;
            state.pagination.page = 1;
        },
        setPriceRange(state, action: PayloadAction<[number, number]>) {
            state.filters.priceRange = action.payload;
            state.pagination.page = 1;
        },
        setAvailability(state, action: PayloadAction<'available' | 'sold' | 'reserved' | 'all'>) {
            state.filters.availability = action.payload;
            state.pagination.page = 1;
        },
        setMedium(state, action: PayloadAction<string>) {
            state.filters.medium = action.payload;
            state.pagination.page = 1;
        },
        setPage(state, action: PayloadAction<number>) {
            state.pagination.page = action.payload;
        },
        setLimit(state, action: PayloadAction<number>) {
            state.pagination.limit = action.payload;
            state.pagination.page = 1;
        },
        setTotal(state, action: PayloadAction<number>) {
            state.pagination.total = action.payload;
        },
        setView(state, action: PayloadAction<'grid' | 'list' | 'masonry'>) {
            state.viewType = action.payload;
        },
        resetFilters(state) {
            state.filters = initialState.filters;
            state.pagination.page = 1;
        },
    },
});

export const { 
    setCategory, 
    setSortBy, 
    setSearchQuery, 
    setPriceRange, 
    setAvailability,
    setMedium,
    setPage, 
    setLimit,
    setTotal, 
    setView, 
    resetFilters 
} = gallerySlice.actions;

export default gallerySlice.reducer;