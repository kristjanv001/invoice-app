import { promises as fs } from 'fs';

import { InvoicesHeader } from "./InvoicesHeader"
import { InvoicesList } from "./InvoicesList";
import { Invoice } from "../interfaces/invoice";

async function getLocalData(path: string) {
  const file = await fs.readFile(process.cwd() + path, 'utf8');
  
  return JSON.parse(file);
}


export async function InvoicesView() {
  const invoices = await getLocalData('/public/data.json');

  return (
    <div className="h-full w-full mt-8 px-6">
      <InvoicesHeader />
      <InvoicesList invoices={invoices} />
    </div>
  )
}