import { cn } from "@/lib/utils";
import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  ReactNode,
} from "react";
import { cva, VariantProps } from "class-variance-authority";

type TextVariant =
  | "nav"
  | "body"
  | "body-sm"
  | "hero"
  | "highlight"
  | "section-lg"
  | "section-md"
  | "section"
  | "card-lg"
  | "card-md"
  | "card";

// interface TextProps {
//   as?: ElementType;
//   variant?: TextVariant;
//   className?: string;
//   children: ReactNode;
// }
export const textVariants = cva("font-poppins", {
  variants: {
    variant: {
      /* Nav Link */
      nav: "text-[20px] font-semibold leading-[100%]",

      /* Body */
      body: "text-[18px] font-normal leading-[30px]",
      "body-sm": "text-[16px] font-normal leading-[24px]",

      /* Hero */
      hero: "text-[48px] leading-[52px] sm:text-[65px] sm:leading-[68px] md:text-[98px] md:leading-[98px] lg:text-[110px] lg:leading-[110px] xl:text-[140px] font-bold xl:leading-[136px] tracking-[0%]",

      /* Highlight */
      highlight:
        "text-[50px] sm:text-[70px] md:text-[90px] xl:text-[120px] font-black leading-[100%] tracking-[5%]",

      /* Section Titles */
      "section-lg":
        "text-[56px] leading-[56px] sm:text-[80px] sm:leading-[76px] md:text-[120px] md:leading-[100px] xl:text-[182px] font-bold xl:leading-[136px]",
      "section-md":
        "text-[36px] leading-[42px] sm:text-[50px] sm:leading-[56px] md:text-[66px] md:leading-[72px] xl:text-[80px] font-semibold xl:leading-[86px]",
      section:
        "text-[40px] leading-[48px] md:text-[66px] font-medium md:leading-[80px]",

      /* Card Titles */
      "card-lg":
        "text-[28px] md:text-[32px] xl:text-[36px] font-medium leading-[100%]",
      "card-md": "text-[28px] font-semibold leading-[28px]",
      card: "text-[24px] font-semibold leading-[32px]",
    },

    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },

  defaultVariants: {
    variant: "body",
    align: "left",
  },
});
export interface TextProps
  extends ComponentPropsWithoutRef<"p">, VariantProps<typeof textVariants> {
  as?: ElementType;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, align, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, align }), className)}
        {...props}
      />
    );
  },
);
