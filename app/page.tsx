import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Shield, Sparkles, TrendingUp } from "lucide-react";
import BannerSlider from "@/components/home/BannerSlider";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Banner Slider */}
      <section className="container mx-auto px-4 py-8">
        <BannerSlider />
      </section>

      {/* Categories Section */}
      <section className="border-t bg-muted/20 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            Explore by Category
          </h2>
          <p className="mb-12 text-center text-muted-foreground">
            Browse our diverse collection across different art forms
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/gallery?category=painting"
              className="group relative aspect-square overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop"
                alt="Paintings"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Paintings</h3>
                <p className="text-sm">Explore masterpieces</p>
              </div>
            </Link>
            <Link
              href="/gallery?category=sculpture"
              className="group relative aspect-square overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&h=400&fit=crop"
                alt="Sculptures"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Sculptures</h3>
                <p className="text-sm">3D art forms</p>
              </div>
            </Link>
            <Link
              href="/gallery?category=photography"
              className="group relative aspect-square overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop"
                alt="Photography"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Photography</h3>
                <p className="text-sm">Captured moments</p>
              </div>
            </Link>
            <Link
              href="/gallery?category=digital"
              className="group relative aspect-square overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=400&fit=crop"
                alt="Digital Art"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Digital Art</h3>
                <p className="text-sm">Modern creations</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-background px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Why Choose Hansy Arts Gallery
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Curated Collection</h3>
              <p className="text-muted-foreground">
                Hand-picked artworks from established and emerging artists
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Authenticity Guaranteed</h3>
              <p className="text-muted-foreground">
                Every piece comes with a certificate of authenticity
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <Palette className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Diverse Styles</h3>
              <p className="text-muted-foreground">
                From classical to contemporary, find art that speaks to you
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Investment Value</h3>
              <p className="text-muted-foreground">
                Art pieces that appreciate in value over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/20 px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Start Your Art Journey Today
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Explore our collection and find the perfect piece for your space
          </p>
          <Button asChild size="lg">
            <Link href="/gallery">
              View Collection <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
