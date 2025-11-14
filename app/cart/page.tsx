"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart } from "@/store/slices/cartSlice";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { items, itemCount } = useAppSelector((state) => state.cart);

  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCart());
    }
  };

  if (itemCount === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <ShoppingCart className="mb-4 size-16 text-muted-foreground" />
          <h1 className="mb-2 text-2xl font-bold">Your Cart is Empty</h1>
          <p className="mb-6 text-muted-foreground">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild>
            <Link href="/gallery">
              <ArrowLeft className="mr-2 size-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/gallery">
            <ArrowLeft className="mr-2 size-4" />
            Continue Shopping
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Cart Items</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearCart}
                className="text-destructive"
              >
                Clear Cart
              </Button>
            </div>

            <div className="space-y-0">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
