import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-base font-body font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-warm-brown focus-visible:ring-warm-brown/30 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-warm-sage text-warm-brown [a&]:hover:opacity-90",
        secondary:
          "border-transparent bg-warm-cream text-warm-brown [a&]:hover:bg-warm-beige",
        destructive:
          "border-transparent bg-warm-terra text-warm-brown [a&]:hover:opacity-90 focus-visible:ring-warm-terra/30",
        outline:
          "text-warm-brown border border-warm-beige [a&]:hover:bg-warm-cream",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
