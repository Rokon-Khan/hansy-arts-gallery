"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchArtworkById, updateArtwork } from "@/store/slices/artworkSlice";
import ArtworkForm from "@/components/admin/ArtworkForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import type { CreateArtworkDto } from "@/store/types/artwork.types";

export default function EditArtworkPage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { selectedArtwork, loading, error } = useAppSelector((state) => state.artwork);

  useEffect(() => {
    if (id) {
      dispatch(fetchArtworkById(id));
    }
  }, [dispatch, id]);

  const handleSubmit = async (data: CreateArtworkDto) => {
    await dispatch(updateArtwork({ ...data, id }));
    router.push("/admin/dashboard");
  };

  if (loading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
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
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="py-20 text-center">
          <p className="text-lg text-destructive">{error || "Artwork not found"}</p>
          <Button asChild className="mt-4">
            <Link href="/admin/dashboard">
              <ArrowLeft className="mr-2 size-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/admin/dashboard">
          <ArrowLeft className="mr-2 size-4" />
          Back to Dashboard
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Edit Artwork</CardTitle>
        </CardHeader>
        <CardContent>
          <ArtworkForm onSubmit={handleSubmit} initialData={selectedArtwork} />
        </CardContent>
      </Card>
    </div>
  );
}
