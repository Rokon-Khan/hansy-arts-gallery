# Hansy Arts Gallery

A modern, fully-featured art gallery application built with Next.js 14+, Redux Toolkit, and shadcn/ui components.

## Features

### Public Gallery
- 🎨 **Home Page**: Beautiful landing page with hero section and features
- 🖼️ **Gallery Page**: Browse artworks with advanced filtering and search
- 🔍 **Artwork Details**: Detailed view of individual artworks
- 🎯 **Search & Filter**: Search by title, artist, category with real-time results
- 📄 **Pagination**: Efficient browsing of large collections

### Admin Dashboard
- 📊 **Dashboard**: Statistics and overview of the collection
- ➕ **Create Artworks**: Add new artworks with comprehensive form
- ✏️ **Edit Artworks**: Update existing artwork details
- 🗑️ **Delete Artworks**: Remove artworks from the collection
- 📋 **Artwork Table**: Manage all artworks in a table view

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **State Management**: Redux Toolkit with typed hooks
- **UI Components**: shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## Project Structure

```
├── app/                          # Next.js app directory
│   ├── (admin)/                  # Admin section
│   │   ├── dashboard/            # Admin dashboard
│   │   └── artworks/             # CRUD pages
│   ├── (gallery)/                # Public gallery
│   │   ├── artwork/[id]/         # Artwork detail
│   │   └── page.tsx              # Gallery listing
│   ├── layout.tsx                # Root layout with Redux Provider
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── admin/                    # Admin components
│   │   ├── ArtworkForm.tsx       # Create/edit form
│   │   └── ArtworkTable.tsx      # Artwork table
│   ├── common/                   # Shared components
│   │   ├── Header.tsx            # Navigation header
│   │   └── Footer.tsx            # Footer
│   ├── gallery/                  # Gallery components
│   │   ├── ArtworkCard.tsx       # Artwork card
│   │   ├── ArtworkGrid.tsx       # Grid layout
│   │   ├── FilterPanel.tsx       # Filters sidebar
│   │   ├── Pagination.tsx        # Pagination controls
│   │   └── SearchBar.tsx         # Search input
│   └── ui/                       # shadcn/ui components
├── store/                        # Redux store
│   ├── slices/                   # Redux slices
│   │   ├── artworkSlice.ts       # Artwork state with async thunks
│   │   └── gallerySlice.ts       # Gallery filters & pagination
│   ├── hooks/                    # Typed Redux hooks
│   ├── types/                    # TypeScript types
│   └── store.ts                  # Store configuration
├── lib/                          # Utilities
│   ├── api.ts                    # API client
│   ├── constants.ts              # App constants
│   └── utils.ts                  # Helper functions
└── hooks/                        # Custom React hooks
    ├── useDebounce.ts            # Debounce hook
    └── useLocalStorage.ts        # LocalStorage hook
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rokon-Khan/hansy-arts-gallery.git
cd hansy-arts-gallery
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_NAME=Hansy Arts Gallery
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Redux Toolkit Implementation

The application uses Redux Toolkit with a clean architecture:

### Artwork Slice
- `fetchArtworks` - Fetch all artworks with pagination
- `fetchArtworkById` - Fetch single artwork
- `createArtwork` - Create new artwork
- `updateArtwork` - Update existing artwork
- `deleteArtwork` - Delete artwork

### Gallery Slice
- Filters (category, sort, price range, availability)
- Pagination (page, limit)
- Search query
- View type (grid/list)

## Mock Data

The application includes mock data for demonstration. In production, replace the mock implementations in `store/slices/artworkSlice.ts` with actual API calls.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Icons from [Lucide](https://lucide.dev/)
