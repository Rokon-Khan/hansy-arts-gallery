"use client";

import { useEffect, useState } from "react";
import ArtworkCard from "./ArtworkCard";
import type { Artwork } from "@/store/types/artwork.types";

interface MasonryGridProps {
  artworks: Artwork[];
}

export default function MasonryGrid({ artworks }: MasonryGridProps) {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const distributeArtworks = () => {
    const cols: Artwork[][] = Array.from({ length: columns }, () => []);
    artworks.forEach((artwork, index) => {
      cols[index % columns].push(artwork);
    });
    return cols;
  };

  const columnArtworks = distributeArtworks();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {columnArtworks.map((colArtworks, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {colArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      ))}
    </div>
  );
}
