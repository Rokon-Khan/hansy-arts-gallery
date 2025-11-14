"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchArtworkById } from "@/store/slices/artworkSlice";
import { addToCart } from "@/store/slices/cartSlice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function ArtworkDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const dispatch = useAppDispatch();
  const { selectedArtwork, loading, error } = useAppSelector((state) => state.artwork);

  const handleAddToCart = () => {
    if (selectedArtwork) {
      dispatch(addToCart(selectedArtwork));
      toast.success("Added to cart", {
        description: `${selectedArtwork.title} has been added to your cart.`,
        action: {
          label: "View Cart",
          onClick: () => router.push("/cart"),
        },
      });
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchArtworkById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="mb-4 size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            <p className="text-muted-foreground">Loading artwork...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !selectedArtwork) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="py-20 text-center">
          <p className="text-lg text-destructive">{error || "Artwork not found"}</p>
          <Button asChild className="mt-4">
            <Link href="/gallery">
              <ArrowLeft className="mr-2 size-4" />
              Back to Gallery
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/gallery">
          <ArrowLeft className="mr-2 size-4" />
          Back to Gallery
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="p-0">
            <img
              src={selectedArtwork.imageUrl}
              alt={selectedArtwork.title}
              className="aspect-square w-full rounded-lg object-cover"
            />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold">{selectedArtwork.title}</h1>
            <p className="text-xl text-muted-foreground">
              by {selectedArtwork.artist}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Badge>{selectedArtwork.category}</Badge>
            <Badge variant={
              selectedArtwork.availability === 'available' ? 'default' :
              selectedArtwork.availability === 'sold' ? 'destructive' : 'secondary'
            }>
              {selectedArtwork.availability}
            </Badge>
          </div>

          <div className="text-3xl font-bold">{formatPrice(selectedArtwork.price)}</div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="text-muted-foreground">{selectedArtwork.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="mb-1 font-semibold">Year</h3>
                <p className="text-muted-foreground">{selectedArtwork.year}</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Medium</h3>
                <p className="text-muted-foreground">{selectedArtwork.medium}</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Dimensions</h3>
                <p className="text-muted-foreground">{selectedArtwork.dimensions}</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Category</h3>
                <p className="text-muted-foreground">{selectedArtwork.category}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1"
              size="lg"
              disabled={selectedArtwork.availability !== 'available'}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 size-5" />
              {selectedArtwork.availability === 'available' ? 'Add to Cart' : 'Not Available'}
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="mr-2 size-5" />
              Save
            </Button>
          </div>

          <div className="rounded-lg border bg-muted/20 p-4">
            <h3 className="mb-2 font-semibold">About this piece</h3>
            <p className="text-sm text-muted-foreground">
              All artworks come with a certificate of authenticity. Free shipping on orders over $500.
              Returns accepted within 14 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
