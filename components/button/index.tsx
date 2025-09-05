"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import { cva, type VariantProps } from "class-variance-authority";

type IconPosition = "left" | "right";
interface IconProps {
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    iconClassName?: string;
    tooltip?: any;
    tooltipClassName?: string;
}

const buttonVariants = cva(
    "inline-flex items-center px-4 justify-center primaryFontBold whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:bg-custom-invoice-button-disabled disabled:text-custom-text-input-placeholder-color disabled:border-custom-invoice-button-disabled",
    {
        variants: {
            variant: {
                default:
                    "bg-custom-button-primary-bg text-custom-button-primary-text border border-transparent",
                outline:
                    "bg-transparent border border-custom-button-primary-bg text-custom-button-primary-bg",
            },
            activeVariant: {
                default:
                    "bg-custom-button-primary-bg text-custom-button-primary-text shadow border border-custom-button-primary-bg",
                outline:
                    "bg-transparent border border-custom-button-primary-bg text-custom-button-primary-bg",
            },
            size: {
                default: "h-11 py-3 text-[16px]",
                sm: "h-8 text-xs text-[14px]",
                md: "h-10 text-[18px]",
                lg: "h-12 text-[20px]",
                xlg: "h-12 text-[24px]",
                icon: "h-9 w-9",
                none: "p-0",
            },
            iconSpacing: {
                default: "gap-2",
                sm: "gap-1",
                lg: "gap-3",
                none: "gap-0",
            },
            textCase: {
                default: "uppercase",
                capitalize: "capitalize",
                lowercase: "lowercase",
            },

        },
        defaultVariants: {
            variant: "default",
            size: "default",
            textCase: "default",
        },
    })

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    IconProps {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      activeVariant,
      size,
      iconSpacing,
      asChild = false,
      icon,
      iconPosition = "left",
      leftIcon,
      rightIcon,
      iconClassName,
      tooltip,
      tooltipClassName,
      children,
      ...props
    },
    ref
  ) => {
    const Comp ="button";

    const renderIcon = (iconElement: React.ReactNode) => {
      return (
        iconElement && (
          <span
            className={`
              inline-flex shrink-0
              ${size === "sm" ? "size-3" : "size-4"}
              ${iconClassName ?? ""}
            `}
          >
            {iconElement}
          </span>
        )
      );
    };

   const ButtonContent=(
      <Comp
        className={buttonVariants({
          variant,
          activeVariant,
          size,
          iconSpacing,
          className,
        })}
        ref={ref}
        {...props}
      >
        {(leftIcon || (icon && iconPosition === "left")) &&
          renderIcon(leftIcon || icon)}
        {children}
        {(rightIcon || (icon && iconPosition === "right")) &&
          renderIcon(rightIcon || icon)}
      </Comp>
    );
    return ButtonContent
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
