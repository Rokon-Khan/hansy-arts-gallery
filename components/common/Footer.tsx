import { Palette } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Palette className="size-5 text-primary" />
            <span className="font-semibold">Hansy Arts Gallery</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hansy Arts Gallery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
