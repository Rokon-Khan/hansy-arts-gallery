"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchArtworks } from "@/store/slices/artworkSlice";
import ArtworkGrid from "@/components/gallery/ArtworkGrid";
import FilterPanel from "@/components/gallery/FilterPanel";
import SearchBar from "@/components/gallery/SearchBar";
import Pagination from "@/components/gallery/Pagination";

export default function GalleryPage() {
  const dispatch = useAppDispatch();
  const { artworks, loading, total } = useAppSelector((state) => state.artwork);
  const { pagination, filters } = useAppSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch, pagination.page, filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Gallery</h1>
        <p className="text-muted-foreground">
          Explore our collection of {total} artworks
        </p>
      </div>

      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="w-full lg:w-64">
          <FilterPanel />
        </aside>
        <div className="flex-1">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="mb-4 size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="text-muted-foreground">Loading artworks...</p>
              </div>
            </div>
          ) : artworks.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No artworks found</p>
            </div>
          ) : (
            <>
              <ArtworkGrid artworks={artworks} />
              <div className="mt-8">
                <Pagination
                  currentPage={pagination.page}
                  totalPages={Math.ceil(total / pagination.limit)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
