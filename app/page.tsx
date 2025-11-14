import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Shield, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4 py-20">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-6 flex items-center justify-center">
            <Palette className="size-16 text-primary" />
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to <span className="text-primary">Hansy Arts Gallery</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Discover exceptional fine art from talented artists worldwide. Explore our curated collection 
            of paintings, sculptures, photography, and more.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/gallery">
                Browse Gallery <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/admin/dashboard">
                Admin Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-background px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Why Choose Hansy Arts Gallery
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
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
