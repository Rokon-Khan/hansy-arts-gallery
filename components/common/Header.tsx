import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import CartButton from "@/components/cart/CartButton";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <Palette className="size-6 text-primary" />
            <span className="text-xl font-bold">Hansy Gallery</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Gallery
          </Link>
          <CartButton />
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/dashboard">Admin</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <CartButton />
        </div>
      </div>
    </header>
  );
}
