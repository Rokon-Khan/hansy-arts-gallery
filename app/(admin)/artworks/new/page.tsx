"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { createArtwork } from "@/store/slices/artworkSlice";
import ArtworkForm from "@/components/admin/ArtworkForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import type { CreateArtworkDto } from "@/store/types/artwork.types";

export default function NewArtworkPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data: CreateArtworkDto) => {
    await dispatch(createArtwork(data));
    router.push("/admin/dashboard");
  };

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
          <CardTitle>Add New Artwork</CardTitle>
        </CardHeader>
        <CardContent>
          <ArtworkForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
}
