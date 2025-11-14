"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { removeFromCart, updateQuantity } from "@/store/slices/cartSlice";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";
import type { CartItem as CartItemType } from "@/store/types/cart.types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.success("Removed from cart", {
      description: `${item.title} has been removed from your cart.`,
    });
  };

  return (
    <div className="flex gap-4 border-b py-4">
      <div className="relative size-24 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.artist}</p>
          <p className="mt-1 font-semibold">{formatPrice(item.price)}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={handleDecrement}
              disabled={item.quantity <= 1}
            >
              <Minus className="size-4" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={handleIncrement}
            >
              <Plus className="size-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={handleRemove}
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      </div>
    </div>
  );
}
