"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppDispatch } from "@/store/hooks";
import { deleteArtwork } from "@/store/slices/artworkSlice";
import { formatPrice } from "@/lib/utils";
import { Edit, Trash2 } from "lucide-react";
import type { Artwork } from "@/store/types/artwork.types";

interface ArtworkTableProps {
  artworks: Artwork[];
}

export default function ArtworkTable({ artworks }: ArtworkTableProps) {
  const dispatch = useAppDispatch();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [artworkToDelete, setArtworkToDelete] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setArtworkToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (artworkToDelete) {
      dispatch(deleteArtwork(artworkToDelete));
      setDeleteDialogOpen(false);
      setArtworkToDelete(null);
    }
  };

  if (artworks.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        No artworks found
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Artist</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {artworks.map((artwork) => (
              <TableRow key={artwork.id}>
                <TableCell>
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="size-12 rounded object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{artwork.title}</TableCell>
                <TableCell>{artwork.artist}</TableCell>
                <TableCell className="capitalize">{artwork.category}</TableCell>
                <TableCell>{formatPrice(artwork.price)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      artwork.availability === 'available' ? 'default' :
                      artwork.availability === 'sold' ? 'destructive' : 'secondary'
                    }
                  >
                    {artwork.availability}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/admin/artworks/${artwork.id}/edit`}>
                        <Edit className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteClick(artwork.id)}
                    >
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Artwork</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this artwork? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
