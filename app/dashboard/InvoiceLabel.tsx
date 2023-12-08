import { cva, type VariantProps } from "class-variance-authority";

const labelContainer = cva(
  ["h-10 w-[104px] flex justify-center items-center bg-opacity-20 rounded-md"],
  {
    variants: {
      intent: {
        paid: ["bg-dark_shamrock"],
        pending: ["bg-princeton_orange"],
        draft: ["bg-carbon_blue"],
      },
    },
  }
);

const labelText = cva(["text-xs font-bold mt-0.5 ml-2 tracking-[-0.25px]"], {
  variants: {
    intent: {
      paid: ["text-dark_shamrock"],
      pending: ["text-princeton_orange"],
      draft: [],
    },
  },
});

const labelOval = cva(["h-2 w-2 rounded-full"], {
  variants: {
    intent: {
      paid: ["bg-dark_shamrock"],
      pending: ["bg-princeton_orange"],
      draft: ["bg-carbon_blue"],
    },
  },
});

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof labelContainer>,
    VariantProps<typeof labelText>,
    VariantProps<typeof labelOval> {}

export function InvoiceLabel({ className, intent, ...props }: Props) {
  return (
    <div className={labelContainer({ className, intent })} {...props}>
      <div className={labelOval({ intent })}></div>
      <span className={labelText({ intent })}>
        {intent === "paid" && "Paid"}
        {intent === "pending" && "Pending"}
        {intent === "draft" && "Draft"}
      </span>
    </div>
  );
}