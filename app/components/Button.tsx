import { cva, type VariantProps } from "class-variance-authority";


const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-venetian_nights",
        "text-white",
        "border-transparent",
        "hover:bg-forgotten_purple",
        
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: [""],
      medium: [""],
    },
  },
  compoundVariants: [
    { 
      intent: "primary", 
      size: "medium", 
      class: "rounded-3xl text-xs font-semibold leading-4 tracking-[-0.25px] p-2" 
    }
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export function Button({ className, intent, size, ...props }: ButtonProps) {
  return (
    <button className={button({ intent, size, className })} {...props} />
  );
}