"use client"
import { useState } from 'react';
import { InvoicesHeader } from "./InvoicesHeader"
import { InvoicesList } from "./InvoicesList";
import { INVOICES } from '../data';
import { Invoice } from '../interfaces/invoice';
import { CheckedState } from '../interfaces/checked';
import { Status } from '../interfaces/invoice';

export function InvoicesView() {
  const [invoices, setInvoices] = useState<Invoice[]>(INVOICES);

  const [checked, setChecked] = useState<CheckedState>({
    paid: true,
    pending: true,
    draft: false
  })

  function handleCheckboxChange(filterBy: Status) {
    setChecked({
      ...checked, 
      [filterBy]: !checked[filterBy]
    })
  }

  return (
    <div className="h-full w-full mt-8 px-6">

      <InvoicesHeader
        amount={invoices.length}
        checked={checked} 
        handleCheckboxChange={handleCheckboxChange}
      />

      <InvoicesList 
        invoices={invoices} 
        checked={checked}
      />

    </div>
  )
}