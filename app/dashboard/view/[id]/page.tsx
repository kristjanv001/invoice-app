import { InvoiceLabel } from "@/app/components/InvoiceLabel"


export default function InvoiceView({ params }: { params: { id: string } }) { 
  console.log(params)
  return (
    <div className="px-6">
      <div className="h-24 w-full bg-white rounded-lg shadow-sm flex justify-between items-center px-6">
        <span className="font-medium text-xs text-purple_impression">Status</span>

        <InvoiceLabel intent="pending" />
      </div>
      
    </div>
  )
}