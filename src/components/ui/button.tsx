import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ButtonProps, ButtonVariant } from "@/types/global"

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-retro-glow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-retro-accent text-retro-900 hover:bg-retro-warm/90 shadow-button-glow hover:shadow-retro-glow border border-retro-accent/20",
        secondary: "bg-retro-800/50 hover:bg-retro-700/70 text-retro-fg border border-retro-600/50 backdrop-blur-sm",
        outline: "border border-retro-600 hover:bg-retro-900/20 text-retro-fg",
        ghost: "hover:bg-retro-900/20 text-retro-fg",
      },
      size: {
        default: "px-6 py-3",
        sm: "h-10 rounded-md px-3",
        lg: "h-14 rounded-xl px-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonPropsReact
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonPropsReact>(
  ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={isLoading}
          {...props}
        >
          {isLoading ? (
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : null}
          {children}
        </Comp>
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

