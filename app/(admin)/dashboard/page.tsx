"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchArtworks } from "@/store/slices/artworkSlice";
import ArtworkTable from "@/components/admin/ArtworkTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Palette, DollarSign, Package } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function AdminDashboard() {
  const dispatch = useAppDispatch();
  const { artworks, loading, total } = useAppSelector((state) => state.artwork);

  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  const availableCount = artworks.filter(a => a.availability === 'available').length;
  const soldCount = artworks.filter(a => a.availability === 'sold').length;
  const totalValue = artworks.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your art gallery</p>
        </div>
        <Button asChild>
          <Link href="/admin/artworks/new">
            <Plus className="mr-2 size-4" />
            Add New Artwork
          </Link>
        </Button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Artworks</CardTitle>
            <Palette className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <Package className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{availableCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sold</CardTitle>
            <Package className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{soldCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatPrice(totalValue)}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Artworks</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="mb-4 size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                <p className="text-muted-foreground">Loading artworks...</p>
              </div>
            </div>
          ) : (
            <ArtworkTable artworks={artworks} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
