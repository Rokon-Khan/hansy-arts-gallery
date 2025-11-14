// store/types/artwork.types.ts

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  dimensions: string;
  medium: string;
  availability: 'available' | 'sold' | 'reserved';
  createdAt: string;
  updatedAt: string;
}

export interface CreateArtworkDto {
  title: string;
  artist: string;
  year: number;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  dimensions: string;
  medium: string;
  availability: 'available' | 'sold' | 'reserved';
}

export interface UpdateArtworkDto extends Partial<CreateArtworkDto> {
  id: string;
}

export interface ArtworkState {
  artworks: Artwork[];
  selectedArtwork: Artwork | null;
  loading: boolean;
  error: string | null;
  total: number;
}
