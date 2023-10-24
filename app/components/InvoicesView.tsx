import { InvoicesHeader } from "./InvoicesHeader"


// font-size: 12px;
// font-style: normal;
// font-weight: 700;
// line-height: 15px; /* 125% */
// letter-spacing: -0.25px;


function InvoiceCard() {
  return (
    <div className="min-h-[134px] bg-white border rounded-lg shadow-sm mt-8 p-6">

      <div className="grid grid-cols-2">

        <div className="col-span-1">
          <div className="grid grid-rows-4">
            <div className="row-span-2">
              <span className="text-true_lavender font-bold text-xs tracking-[-0.25px] leading-4">#</span>
              <span className="font-bold text-xs tracking-[-0.25px] leading-4">RT3080</span>
            </div>
            <div className="row-span-1 bg-yellow-200"><span>Due 19 Aug 2021</span></div>
            <div className="row-span-1 bg-pink-300">£1,800.90</div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid grid-rows-2 justify-items-end h-full">
            <div className="row-span-1 h-full items-center justify-center"><span>Jensen Huang</span></div>
            <div className="row-span-1 h-full flex justify-center items-center">
              <div className="h-10 bg-green-200">
                Paid
              </div>
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