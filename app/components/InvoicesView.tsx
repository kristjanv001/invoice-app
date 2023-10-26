import { InvoicesHeader } from "./InvoicesHeader"
import { InvoicesList } from "./InvoicesList";


export function InvoicesView() {
  return (
    <div className="h-full w-full mt-8 px-6">
      <InvoicesHeader />
      <InvoicesList />
    </div>
  )
}