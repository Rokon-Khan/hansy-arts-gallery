import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Artwork, ArtworkState, CreateArtworkDto, UpdateArtworkDto } from '../types/artwork.types';

const initialState: ArtworkState = {
    artworks: [],
    selectedArtwork: null,
    loading: false,
    error: null,
    total: 0,
};

// Mock API calls - in production, these would call actual API endpoints
export const fetchArtworks = createAsyncThunk(
    'artwork/fetchArtworks',
    async () => {
        // Mock data for demonstration
        const mockArtworks: Artwork[] = [
            {
                id: '1',
                title: 'Starry Night',
                artist: 'Vincent van Gogh',
                year: 1889,
                category: 'painting',
                price: 5000,
                description: 'A beautiful night sky painting',
                imageUrl: '/placeholder-artwork.jpg',
                dimensions: '73.7 cm × 92.1 cm',
                medium: 'Oil on canvas',
                availability: 'available',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        ];
        
        return { artworks: mockArtworks, total: mockArtworks.length };
    }
);

export const fetchArtworkById = createAsyncThunk(
    'artwork/fetchArtworkById',
    async (id: string) => {
        // Mock data - in production, fetch from API
        const mockArtwork: Artwork = {
            id,
            title: 'Starry Night',
            artist: 'Vincent van Gogh',
            year: 1889,
            category: 'painting',
            price: 5000,
            description: 'A beautiful night sky painting',
            imageUrl: '/placeholder-artwork.jpg',
            dimensions: '73.7 cm × 92.1 cm',
            medium: 'Oil on canvas',
            availability: 'available',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        return mockArtwork;
    }
);

export const createArtwork = createAsyncThunk(
    'artwork/createArtwork',
    async (data: CreateArtworkDto) => {
        // Mock creation - in production, POST to API
        const newArtwork: Artwork = {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        return newArtwork;
    }
);

export const updateArtwork = createAsyncThunk(
    'artwork/updateArtwork',
    async (data: UpdateArtworkDto) => {
        // Mock update - in production, PUT to API
        const updatedArtwork: Artwork = {
            id: data.id,
            title: data.title || '',
            artist: data.artist || '',
            year: data.year || 0,
            category: data.category || '',
            price: data.price || 0,
            description: data.description || '',
            imageUrl: data.imageUrl || '',
            dimensions: data.dimensions || '',
            medium: data.medium || '',
            availability: data.availability || 'available',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        return updatedArtwork;
    }
);

export const deleteArtwork = createAsyncThunk(
    'artwork/deleteArtwork',
    async (id: string) => {
        // Mock deletion - in production, DELETE to API
        return id;
    }
);

const artworkSlice = createSlice({
    name: 'artwork',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        },
        clearSelectedArtwork(state) {
            state.selectedArtwork = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch artworks
        builder
            .addCase(fetchArtworks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArtworks.fulfilled, (state, action) => {
                state.loading = false;
                state.artworks = action.payload.artworks;
                state.total = action.payload.total;
            })
            .addCase(fetchArtworks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch artworks';
            });

        // Fetch artwork by ID
        builder
            .addCase(fetchArtworkById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArtworkById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedArtwork = action.payload;
            })
            .addCase(fetchArtworkById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch artwork';
            });

        // Create artwork
        builder
            .addCase(createArtwork.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createArtwork.fulfilled, (state, action) => {
                state.loading = false;
                state.artworks.unshift(action.payload);
                state.total += 1;
            })
            .addCase(createArtwork.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to create artwork';
            });

        // Update artwork
        builder
            .addCase(updateArtwork.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateArtwork.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.artworks.findIndex(a => a.id === action.payload.id);
                if (index !== -1) {
                    state.artworks[index] = action.payload;
                }
                if (state.selectedArtwork?.id === action.payload.id) {
                    state.selectedArtwork = action.payload;
                }
            })
            .addCase(updateArtwork.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update artwork';
            });

        // Delete artwork
        builder
            .addCase(deleteArtwork.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteArtwork.fulfilled, (state, action) => {
                state.loading = false;
                state.artworks = state.artworks.filter(a => a.id !== action.payload);
                state.total -= 1;
            })
            .addCase(deleteArtwork.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete artwork';
            });
    },
});

export const { clearError, clearSelectedArtwork } = artworkSlice.actions;
export default artworkSlice.reducer;