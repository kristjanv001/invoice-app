import Link from "next/link"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


export default function InvoiceCRUDLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center my-8 px-6">
          <ChevronLeftIcon className="h-4 w-4 text-venetian_nights font-bold" />
          <Link href="/dashboard" className='leading-none mt-[3px] ml-2 font-bold text-xs'>Go back</Link>
      </div> 
      {children}
    </div>
  )
}
