"use client";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { formatPrice } from "@/lib/utils";

export default function CartSummary() {
  const { total, itemCount } = useAppSelector((state) => state.cart);

  const shipping = total > 0 ? 50 : 0; // Flat shipping rate
  const tax = total * 0.1; // 10% tax
  const grandTotal = total + shipping + tax;

  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>
          <span className="font-medium">{formatPrice(total)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax (10%)</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">{formatPrice(grandTotal)}</span>
          </div>
        </div>
      </div>

      <Button className="mt-6 w-full" size="lg" disabled={itemCount === 0}>
        Proceed to Checkout
      </Button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Taxes and shipping calculated at checkout
      </p>
    </div>
  );
}
