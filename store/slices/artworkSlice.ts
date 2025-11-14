import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Artwork {
    id: string;
    title: string;
    artist: string;
    year: number;
    imageUrl: string;
}

interface ArtworkState {
    artworks: Artwork[];
    loading: boolean;
    error: string | null;
}

const initialState: ArtworkState = {
    artworks: [],
    loading: false,
    error: null,
};

const artworkSlice = createSlice({
    name: 'artwork',
    initialState,
    reducers: {
        fetchArtworksStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchArtworksSuccess(state, action: PayloadAction<Artwork[]>) {
            state.loading = false;
            state.artworks = action.payload;
        },
        fetchArtworksFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchArtworksStart, fetchArtworksSuccess, fetchArtworksFailure } = artworkSlice.actions;
export default artworkSlice.reducer;