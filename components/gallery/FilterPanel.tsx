"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCategory,
  setSortBy,
  setPriceRange,
  setAvailability,
  resetFilters,
} from "@/store/slices/gallerySlice";
import { CATEGORIES, SORT_OPTIONS } from "@/lib/constants";
import { RotateCcw } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function FilterPanel() {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.gallery);

  const handlePriceChange = (value: number[]) => {
    dispatch(setPriceRange([value[0], value[1]]));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Filters</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(resetFilters())}
          >
            <RotateCcw className="mr-2 size-4" />
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Category</Label>
          <Select
            value={filters.category}
            onValueChange={(value) => dispatch(setCategory(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Sort By</Label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => dispatch(setSortBy(value as 'latest' | 'oldest' | 'price-low' | 'price-high' | 'title-asc' | 'title-desc'))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Price Range</Label>
          <Slider
            min={0}
            max={10000}
            step={100}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatPrice(filters.priceRange[0])}</span>
            <span>{formatPrice(filters.priceRange[1])}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Availability</Label>
          <Select
            value={filters.availability}
            onValueChange={(value) => dispatch(setAvailability(value as 'available' | 'sold' | 'reserved' | 'all'))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
