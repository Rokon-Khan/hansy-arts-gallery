import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, LayoutDashboard, Plus } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold">
              Hansy Gallery Admin
            </Link>
            <nav className="hidden items-center gap-4 md:flex">
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin/dashboard">
                  <LayoutDashboard className="mr-2 size-4" />
                  Dashboard
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin/artworks/new">
                  <Plus className="mr-2 size-4" />
                  Add Artwork
                </Link>
              </Button>
            </nav>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <Home className="mr-2 size-4" />
              View Gallery
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-muted/20">{children}</main>
    </div>
  );
}
