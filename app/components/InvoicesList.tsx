import { InvoiceCard } from "./InvoiceCard";
import { Invoice } from "../interfaces/invoice";
import { CheckedState } from "../interfaces/checked";


export function InvoicesList(props: InvoicesListProps) {
  const { invoices, checked } = props;

  const filteredInvoices = invoices.filter((invoice) => {
    return checked[invoice.status];
  });

  return (
    <ul className="mb-24">
      {filteredInvoices.map((invoice) => {
          return (
            <li key={invoice.id}>
              <InvoiceCard invoice={invoice} />
            </li>
          )
        })}
    </ul>
  )
}

interface InvoicesListProps { 
  invoices: Invoice[], 
  checked: CheckedState,
}