import { useEffect, useState } from 'react';
import { InvoiceCard } from "./InvoiceCard";

// 🚀 loop over json data 

export function InvoicesList() {
  return (
    <ul>
      <li>
        <InvoiceCard intent="pending" />
        <InvoiceCard intent="paid" />
      </li>
    </ul>
  )
}