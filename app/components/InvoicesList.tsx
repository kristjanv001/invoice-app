import { InvoiceCard } from "./InvoiceCard";
import { Invoice } from "../interfaces/invoice";
import { CheckedState } from "../interfaces/checked";

export function InvoicesList(props: InvoicesListProps) {
  const { invoices, checked } = props;

  const filteredInvoices = invoices.filter((invoice) => {
    return checked[invoice.status];
  });

  return (
    <>
      {invoices.length >= 1 && (
        <ul className="mt-8 mb-24">
          {filteredInvoices.map((invoice) => {
            return (
              <li key={invoice.id}>
                <InvoiceCard invoice={invoice} />
              </li>
            );
          })}
        </ul>
      )}

      {invoices.length === 0 &&
      <div className="mt-24 flex flex-col justify-center items-center">
        <img src="assets/illustration-empty.svg" alt="" />
        <div className="px-14 text-center">
          <p className="font-bold text-xl mt-10 mb-6 tracking-[-0.625px]">There is nothing here</p>
          <p className="text-xs text-purple_impression tracking-[-0.25px] leading-4 font-medium">Create an invoice by clicking the <span className="font-bold">New</span> button and get started</p>
        </div>
      </div>
      }
    </>
  );
}

interface InvoicesListProps {
  invoices: Invoice[];
  checked: CheckedState;
}
