export interface Invoice {
  id: string,
  createdAt: string,
  paymentDue: string,
  description: string,
  paymentTerms: number,
  clientName: string,
  clientEmail: string,
  status: Status,
  senderAddress: {
    street: string,
    city: string,
    postCode: string,
    country: string
  },
  clientAddress: {
    street: string,
    city: string,
    postCode: string,
    country: string
  },
  items: Item[],
  total: number
}

interface Item {
  name: string,
  quantity: number,
  price: number,
  total: number
}

export type Status = "paid" | "pending" | "draft";

