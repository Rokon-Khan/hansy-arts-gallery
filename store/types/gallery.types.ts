// store/types/gallery.types.ts

export interface GalleryFilters {
  category: string;
  sortBy: string;
  searchQuery: string;
  priceRange: [number, number];
  availability?: 'available' | 'sold' | 'reserved' | 'all';
  medium?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface GalleryState {
  filters: GalleryFilters;
  pagination: Pagination;
  viewType: 'grid' | 'list';
}

export type SortOption = 'latest' | 'oldest' | 'price-low' | 'price-high' | 'title-asc' | 'title-desc';
export type CategoryOption = 'all' | 'painting' | 'sculpture' | 'photography' | 'digital' | 'mixed-media';
