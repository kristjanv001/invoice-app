import { cva, type VariantProps } from "class-variance-authority";


const labelContainer = cva(["h-10 w-[104px] flex justify-center items-center bg-opacity-20 rounded-md"], {
  variants: {
    intent: {
      paid: ["bg-dark_shamrock"],
      pending: ["bg-princeton_orange"],
      draft: ["bg-carbon_blue"],
    },
  },
});

const labelText = cva(["text-xs font-bold mt-0.5 ml-2"], {
  variants: {
    intent: {
      paid: ["text-dark_shamrock"],
      pending: ["text-princeton_orange"],
      draft: []
    }
  }
})

const labelOval = cva(["h-2 w-2 rounded-full"], {
  variants: {
    intent: {
      paid: ["bg-dark_shamrock"],
      pending: ["bg-princeton_orange"],
      draft: []
    }
  }
})

interface LabelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof labelContainer>, VariantProps<typeof labelText>, VariantProps<typeof labelOval> {}
export function Label({className, intent, ...props}: LabelProps) {
  return (
    <div className={labelContainer({className, intent})} {...props}>
      <div className={labelOval({intent})}></div>
      <span className={labelText({intent})}>
        {intent === "paid" && "Paid"}
        {intent === "pending" && "Pending"}
        {intent === "draft" && "Draft"}
      </span>
    </div>
  )
}

interface InvoiceCardProps {
  intent: "paid" | "pending" | "draft"
}
export function InvoiceCard({intent}: InvoiceCardProps) {
  return (
    <div className="min-h-[134px] bg-white border rounded-lg shadow-sm mb-4 p-6">

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="grid grid-rows-4">
            <div className="row-span-2 font-bold text-xs tracking-[-0.25px] leading-4 justify-end">
              <span className="text-true_lavender">#</span>
              <span>RT3080</span>
            </div>
            <div className="row-span-1 text-xs font-medium leading-4 tracking-[-0.25px]">
              <span className="text-purple_impression mr-2">Due</span>
              <span className="text-true_lavender">19 Aug 2021</span>
            </div>
            <div className="row-span-1 flex items-end">
                <span className="text-base font-bold leading-none mt-1">£ 1,800.90</span>
              </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid grid-rows-2 h-full">
            <div className="row-span-1 h-full flex items-start justify-end">
              <span className="text-purple_impression font-medium text-xs leading-4">Jensen Huang</span>
            </div>
            <div className="row-span-1 h-full flex justify-end items-end">
              <Label intent={intent} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}