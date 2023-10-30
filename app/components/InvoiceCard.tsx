import { cva, type VariantProps } from "class-variance-authority";
import { Invoice } from "../interfaces/invoice";
import Link from "next/link";


function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  return `${date.toLocaleDateString(
    'en-GB', 
    { year: 'numeric', month: 'short', day: '2-digit' }
  )}`;
}

function formatCurrency(amount: number) {
  const currencyFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  });
  return currencyFormatter.format(amount);
}

const labelContainer = cva(["h-10 w-[104px] flex justify-center items-center bg-opacity-20 rounded-md"], {
  variants: {
    intent: {
      paid: ["bg-dark_shamrock"],
      pending: ["bg-princeton_orange"],
      draft: ["bg-carbon_blue"],
    },
  },
});

const labelText = cva(["text-xs font-bold mt-0.5 ml-2 tracking-[-0.25px]"], {
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
      draft: ["bg-carbon_blue"]
    }
  }
})

interface LabelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof labelContainer>, VariantProps<typeof labelText>, VariantProps<typeof labelOval> {}

export function Label({className, intent, ...props}: LabelProps) {
  return (
    <div className={labelContainer({className, intent})} {...props}>
      <div className={labelOval({intent})}></div>
      <span className={labelText({intent}) }>
        {intent === "paid" && "Paid"}
        {intent === "pending" && "Pending"}
        {intent === "draft" && "Draft"}
      </span>
    </div>
  )
}

interface InvoiceCardProps {
  invoice: Invoice
}

{/* <Link href={`/blog/${post.slug}`}>{post.title}</Link> */}

// http://localhost:3000/dashboard/view/RT3080

export function InvoiceCard({invoice}: InvoiceCardProps) {
  return (
    <div className="min-h-[134px] bg-white border rounded-lg shadow-sm mb-4 p-6 hover:border-venetian_nights focus:ring focus:ring-forgotten_purple cursor-pointer duration-200">

      <Link 
        className="bg-sky-200 p-2" 
        href={`/dashboard/view/${invoice.id}`}>
          view
      </Link>

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="grid grid-rows-4">
            <div className="row-span-2 font-bold text-xs tracking-[-0.25px] leading-4 justify-end">
              <span className="text-true_lavender">#</span>
              <span>{invoice.id}</span>
            </div>
            <div className="row-span-1 text-xs font-medium leading-4 tracking-[-0.25px]">
              <span className="text-purple_impression mr-2">Due</span>
              <span className="text-true_lavender">{formatDate(invoice.paymentDue)}</span>
            </div>
            <div className="row-span-1 flex items-end">
                <span className="text-base font-bold leading-none mt-1">{formatCurrency(invoice.total)}</span>
              </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid grid-rows-2 h-full">
            <div className="row-span-1 h-full flex items-start justify-end">
              <span className="text-purple_impression font-medium text-xs leading-4">{invoice.clientName}</span>
            </div>
            <div className="row-span-1 h-full flex justify-end items-end">
              <Label intent={invoice.status} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}