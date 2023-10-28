import { InvoiceCard } from "./InvoiceCard";
import { Invoice } from "../interfaces/invoice";


interface InvoicesListProps { invoices: Invoice[] }
export function InvoicesList({invoices}: InvoicesListProps) {
  return (
    <ul>
      {invoices.map((invoice) => {
          return (
            <li>
              <InvoiceCard invoice={invoice} />
            </li>
          )
        })}
    </ul>
  )
}