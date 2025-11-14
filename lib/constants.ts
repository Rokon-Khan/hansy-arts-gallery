// lib/constants.ts

export const CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'painting', label: 'Painting' },
  { value: 'sculpture', label: 'Sculpture' },
  { value: 'photography', label: 'Photography' },
  { value: 'digital', label: 'Digital Art' },
  { value: 'mixed-media', label: 'Mixed Media' },
] as const;

export const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'title-asc', label: 'Title: A-Z' },
  { value: 'title-desc', label: 'Title: Z-A' },
] as const;

export const PRICE_RANGES = [
  { value: [0, 1000], label: 'Under $1,000' },
  { value: [1000, 5000], label: '$1,000 - $5,000' },
  { value: [5000, 10000], label: '$5,000 - $10,000' },
  { value: [10000, 50000], label: '$10,000 - $50,000' },
  { value: [50000, 999999], label: 'Over $50,000' },
] as const;

export const MEDIUMS = [
  'Oil on canvas',
  'Acrylic on canvas',
  'Watercolor',
  'Digital',
  'Photography',
  'Sculpture',
  'Mixed media',
  'Charcoal',
  'Pastel',
  'Ink',
] as const;

export const AVAILABILITY_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'available', label: 'Available' },
  { value: 'sold', label: 'Sold' },
  { value: 'reserved', label: 'Reserved' },
] as const;

export const ITEMS_PER_PAGE = 12;
export const MAX_PRICE = 999999;
