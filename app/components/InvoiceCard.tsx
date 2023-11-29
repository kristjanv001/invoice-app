import { InvoiceLabel } from "./InvoiceLabel";
import { Invoice } from "../interfaces/invoice";
import Link from "next/link";
import { formatCurrency } from "../utils/currency";
import { formatDate } from "../utils/date";


interface InvoiceCardProps {
  invoice: Invoice;
}

// <Link href={`/developers/developer?name=${mentor.name}&picture=${mentor.picture}`}>

export function InvoiceCard({ invoice }: InvoiceCardProps) {
  return (
    <Link href={`/dashboard/view/${invoice.id}`}>
      <div className="min-h-[134px] bg-white border rounded-lg shadow-sm mb-4 p-6 hover:border-venetian_nights focus:ring focus:ring-forgotten_purple cursor-pointer duration-200">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="grid grid-rows-4">
              <div className="row-span-2 font-bold text-xs tracking-[-0.25px] leading-4 justify-end">
                <span className="text-true_lavender">#</span>
                <span>{invoice.id}</span>
              </div>
              <div className="row-span-1 text-xs font-medium leading-4 tracking-[-0.25px]">
                <span className="text-purple_impression mr-2">Due</span>
                <span className="text-true_lavender">
                  {formatDate(invoice.paymentDue)}
                </span>
              </div>
              <div className="row-span-1 flex items-end">
                <span className="text-base font-bold leading-none mt-1">
                  {formatCurrency(invoice.total)}
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-rows-2 h-full">
              <div className="row-span-1 h-full flex items-start justify-end">
                <span className="text-purple_impression font-medium text-xs leading-4">
                  {invoice.clientName}
                </span>
              </div>
              <div className="row-span-1 h-full flex justify-end items-end">
                <InvoiceLabel intent={invoice.status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
