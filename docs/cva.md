
- **Use the shortcut: Ctrl + Shift + V**

# 🎨 Class Variance Authority (CVA)

The **Class Variance Authority (CVA)** helps you manage conditional and variant-based class names in a **type-safe** way.

---
#### Why use CVA?

- **Eliminates manual clsx or classnames conditionals.** 
- **Automatically infers TypeScript types for variants.** 
- **Provides default variants and composable styling.** 

## 🚀 Usage Example

```ts
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center rounded-md font-medium transition-colors", // base styles
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        ghost: "bg-transparent hover:bg-gray-100",
      },
      size: {
        small: "px-2 py-1 text-sm",
        large: "px-4 py-2 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);
```                        

#### 📦 Consuming Variants
```ts
<button className={buttonVariants({ variant: "secondary", size: "large" })}>
  Secondary Button
</button>
```

#### Extract type-safe props
```ts
type ButtonVariantProps = VariantProps<typeof buttonVariants>;
 Equivalent to:
type ButtonVariantProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "large";
};
```

#### Extend for a component interface
```ts
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  isApprovedAction?: boolean;
}
```
