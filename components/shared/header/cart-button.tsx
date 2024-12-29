"use client";

import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import useIsMounted from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import useCartStore from "@/hooks/use-cart-store";
import useCartSidebar from "@/hooks/use-cart-sidebar";

export default function CartButton() {
  const isMounted = useIsMounted();
  const {
    cart: { items },
  } = useCartStore();
  const cartItemsCount = items.reduce((a, c) => a + c.quantity, 0);
  const isCartSidebarOpen = useCartSidebar();
  return (
    <Link href="/cart" className="header-button px-1">
      <div className="relative flex items-end text-xs">
        <ShoppingCartIcon className="size-8" />

        {isMounted && (
          <span
            className={cn(
              `bg-black  px-1 rounded-full text-primary text-base font-bold absolute right-[30px] top-[-4px] z-10`,
              cartItemsCount >= 10 && "text-sm px-0 p-[1px]",
            )}
          >
            {cartItemsCount}
          </span>
        )}
        <span className="font-bold">Cart</span>
        {isCartSidebarOpen && (
          <div
            className={`absolute right-[-16px] top-[20px] z-10 size-0 -rotate-90 border-x-[7px] border-b-8 border-transparent border-b-background`}
          ></div>
        )}
      </div>
    </Link>
  );
}
