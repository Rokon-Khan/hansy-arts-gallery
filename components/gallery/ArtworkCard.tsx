import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Artwork } from "@/store/types/artwork.types";

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-2 top-2">
            <Badge
              variant={
                artwork.availability === 'available' ? 'default' :
                artwork.availability === 'sold' ? 'destructive' : 'secondary'
              }
            >
              {artwork.availability}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="line-clamp-1 text-lg font-semibold">{artwork.title}</h3>
          <p className="line-clamp-1 text-sm text-muted-foreground">{artwork.artist}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="text-lg font-bold">{formatPrice(artwork.price)}</p>
            <p className="text-xs text-muted-foreground">{artwork.year}</p>
          </div>
          <Button asChild size="sm">
            <Link href={`/gallery/artwork/${artwork.id}`}>
              <Eye className="mr-2 size-4" />
              View
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
