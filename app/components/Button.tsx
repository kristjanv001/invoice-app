import { cva, type VariantProps } from "class-variance-authority";


const button = cva([
  "duration-200",
  "border-transparent", 
  "tracking-[-0.25px]", 
  "rounded-3xl", 
  "font-semibold", 
  "text-xs", 
  "leading-none", 
  "flex", 
  "items-center", 
  "justify-center"], 
  {
    variants: {
      intent: {
        primary: ["bg-venetian_nights text-white hover:bg-forgotten_purple"],
        secondary: [],
        danger: []
      }
    }
})

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  VariantProps<typeof button> {}

export function Button({className, intent, ...props}: Props) {
  return (
    <button className={button({className, intent})} {...props}>
      {props.children}
    </button>
  )
}