"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchArtworks } from "@/store/slices/artworkSlice";
import { setView } from "@/store/slices/gallerySlice";
import ArtworkGrid from "@/components/gallery/ArtworkGrid";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import FilterPanel from "@/components/gallery/FilterPanel";
import SearchBar from "@/components/gallery/SearchBar";
import Pagination from "@/components/gallery/Pagination";
import { Button } from "@/components/ui/button";
import { Grid, LayoutGrid } from "lucide-react";

export default function GalleryPage() {
  const dispatch = useAppDispatch();
  const { artworks, loading, total } = useAppSelector((state) => state.artwork);
  const { pagination, filters, viewType } = useAppSelector((state) => state.gallery);

  const toggleView = () => {
    dispatch(setView(viewType === "grid" ? "masonry" : "grid"));
  };

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

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar />
        <Button
          variant="outline"
          size="sm"
          onClick={toggleView}
          className="w-fit"
        >
          {viewType === "grid" ? (
            <>
              <LayoutGrid className="mr-2 size-4" />
              Masonry View
            </>
          ) : (
            <>
              <Grid className="mr-2 size-4" />
              Grid View
            </>
          )}
        </Button>
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
              {viewType === "grid" ? (
                <ArtworkGrid artworks={artworks} />
              ) : (
                <MasonryGrid artworks={artworks} />
              )}
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
