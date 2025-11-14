"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, MEDIUMS } from "@/lib/constants";
import type { Artwork, CreateArtworkDto, UpdateArtworkDto } from "@/store/types/artwork.types";

interface ArtworkFormProps {
  onSubmit: (data: CreateArtworkDto | UpdateArtworkDto) => void;
  initialData?: Artwork;
}

export default function ArtworkForm({ onSubmit, initialData }: ArtworkFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    artist: initialData?.artist || "",
    year: initialData?.year || new Date().getFullYear(),
    category: initialData?.category || "painting",
    price: initialData?.price || 0,
    description: initialData?.description || "",
    imageUrl: initialData?.imageUrl || "",
    dimensions: initialData?.dimensions || "",
    medium: initialData?.medium || "Oil on canvas",
    availability: initialData?.availability || "available" as const,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="artist">Artist *</Label>
          <Input
            id="artist"
            value={formData.artist}
            onChange={(e) => handleChange("artist", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="year">Year *</Label>
          <Input
            id="year"
            type="number"
            value={formData.year}
            onChange={(e) => handleChange("year", parseInt(e.target.value))}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Price ($) *</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => handleChange("price", parseFloat(e.target.value))}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => handleChange("category", value)}
          >
            <SelectTrigger id="category">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.filter(c => c.value !== 'all').map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="medium">Medium *</Label>
          <Select
            value={formData.medium}
            onValueChange={(value) => handleChange("medium", value)}
          >
            <SelectTrigger id="medium">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {MEDIUMS.map((medium) => (
                <SelectItem key={medium} value={medium}>
                  {medium}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dimensions">Dimensions *</Label>
          <Input
            id="dimensions"
            value={formData.dimensions}
            onChange={(e) => handleChange("dimensions", e.target.value)}
            placeholder="e.g., 100 cm × 80 cm"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">Availability *</Label>
          <Select
            value={formData.availability}
            onValueChange={(value) => handleChange("availability", value)}
          >
            <SelectTrigger id="availability">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL *</Label>
        <Input
          id="imageUrl"
          value={formData.imageUrl}
          onChange={(e) => handleChange("imageUrl", e.target.value)}
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          rows={4}
          required
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          {initialData ? "Update Artwork" : "Create Artwork"}
        </Button>
      </div>
    </form>
  );
}
