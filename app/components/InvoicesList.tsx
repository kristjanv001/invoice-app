import { InvoiceCard } from "./InvoiceCard";
import { Invoice } from "../interfaces/invoice";


interface InvoicesListProps { invoices: Invoice[] }
export function InvoicesList({invoices}: InvoicesListProps) {
  return (
    <ul className="mb-24">
      {invoices.map((invoice) => {
          return (
            <li key={invoice.id}>
              <InvoiceCard invoice={invoice} />
            </li>
          )
        })}
    </ul>
  )
}