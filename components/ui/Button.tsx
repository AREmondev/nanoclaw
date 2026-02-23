import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export const buttonVariants = cva(
  "flex! whitespace-nowrap line-clamp-1 items-center justify-center h-12 sm:h-[60px] px-6 sm:px-10 rounded-full font-poppins uppercase text-sm sm:text-[16px] font-semibold transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        white: "bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends
    ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
