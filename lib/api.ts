// lib/api.ts

import { Artwork, CreateArtworkDto, UpdateArtworkDto } from '@/store/types/artwork.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const artworkApi = {
  async getAll(params?: {
    page?: number;
    limit?: number;
    category?: string;
    sortBy?: string;
    searchQuery?: string;
    priceRange?: [number, number];
  }): Promise<{ artworks: Artwork[]; total: number }> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.category && params.category !== 'all') queryParams.append('category', params.category);
    if (params?.sortBy) queryParams.append('sortBy', params.sortBy);
    if (params?.searchQuery) queryParams.append('search', params.searchQuery);
    if (params?.priceRange) {
      queryParams.append('minPrice', params.priceRange[0].toString());
      queryParams.append('maxPrice', params.priceRange[1].toString());
    }

    const response = await fetch(`${API_BASE_URL}/artworks?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch artworks');
    return response.json();
  },

  async getById(id: string): Promise<Artwork> {
    const response = await fetch(`${API_BASE_URL}/artworks/${id}`);
    if (!response.ok) throw new Error('Failed to fetch artwork');
    return response.json();
  },

  async create(data: CreateArtworkDto): Promise<Artwork> {
    const response = await fetch(`${API_BASE_URL}/artworks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create artwork');
    return response.json();
  },

  async update(data: UpdateArtworkDto): Promise<Artwork> {
    const response = await fetch(`${API_BASE_URL}/artworks/${data.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update artwork');
    return response.json();
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/artworks/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete artwork');
  },
};
