"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: "Discover Fine Art",
    description: "Explore our curated collection of exceptional artworks from talented artists worldwide",
    imageUrl: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1920&h=600&fit=crop",
    ctaText: "Browse Gallery",
    ctaLink: "/gallery",
  },
  {
    id: 2,
    title: "Contemporary Masterpieces",
    description: "Modern art that speaks to the soul and transforms any space",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=600&fit=crop",
    ctaText: "View Collection",
    ctaLink: "/gallery",
  },
  {
    id: 3,
    title: "Limited Edition Pieces",
    description: "Exclusive artworks available for a limited time only",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&h=600&fit=crop",
    ctaText: "Shop Now",
    ctaLink: "/gallery",
  },
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg md:h-[600px]">
      {/* Banners */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative size-full">
            <img
              src={banner.imageUrl}
              alt={banner.title}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-3xl px-4 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                  {banner.title}
                </h2>
                <p className="mb-8 text-lg md:text-xl">
                  {banner.description}
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href={banner.ctaLink}>{banner.ctaText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        aria-label="Previous banner"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30"
        aria-label="Next banner"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`size-3 rounded-full transition ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
