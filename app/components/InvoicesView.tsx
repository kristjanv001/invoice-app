import { InvoicesHeader } from "./InvoicesHeader"


function Label() {
  return (
    <div className="h-10 w-[104px] bg-dark_shamrock flex justify-center items-center bg-opacity-20 rounded-md">
      <div className="h-2 w-2 rounded-full bg-dark_shamrock"></div>
      <span className="text-xs font-bold text-dark_shamrock mt-[2px] ml-2">Paid</span>
    </div>
  )
}

function InvoiceCard() {
  return (
    <div className="min-h-[134px] bg-white border rounded-lg shadow-sm mt-8 p-6">

      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <div className="grid grid-rows-4">
            <div className="row-span-2 font-bold text-xs tracking-[-0.25px] leading-4 justify-end">
              <span className="text-true_lavender">#</span>
              <span>RT3080</span>
            </div>
            <div className="row-span-1 text-xs font-medium leading-4 tracking-[-0.25px]">
              <span className="text-purple_impression mr-2">Due</span>
              <span className="text-true_lavender">19 Aug 2021</span>
            </div>
            <div className="row-span-1 flex items-end">
                <span className="text-base font-bold leading-none mt-1">£ 1,800.90</span>
              </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid grid-rows-2 h-full">
            <div className="row-span-1 h-full flex items-start justify-end">
              <span className="text-purple_impression font-medium text-xs leading-4">Jensen Huang</span>
            </div>
            <div className="row-span-1 h-full flex justify-end items-end">
              <Label />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


function InvoicesList() {
  return (
    <div>
      <ul>
        <li>
          <InvoiceCard />
        </li>
      </ul>
    </div>
  )
}


export function InvoicesView() {
  return (
    <div className="h-full w-full mt-8 px-6">
      <InvoicesHeader />
      <InvoicesList />
    </div>
  )
}