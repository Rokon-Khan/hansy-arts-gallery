"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

export default function CartButton() {
  const itemCount = useAppSelector((state) => state.cart.itemCount);

  return (
    <Button asChild variant="ghost" size="icon" className="relative">
      <Link href="/cart">
        <ShoppingCart className="size-5" />
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
        <span className="sr-only">Shopping Cart ({itemCount} items)</span>
      </Link>
    </Button>
  );
}
