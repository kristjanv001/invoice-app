import { Button } from "./Button"


function NewInvoiceBtn() {
  return (
    <Button intent="primary" className="flex justify-center items-center pl-[6px] pr-[14px] py-[6px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="white"/>
        <path 
          d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z" 
          fill="#7C5DFA"
        />
      </svg>
      <span className="ml-2 mt-0.5">New</span>
    </Button>
  )
}

function FilterInvoicesBtn() {
  return (
    <button className="flex justify-center items-center">
      <span className="font-bold text-xs leading-4 tracking-[-0.25px] mr-2">Filter</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
        <path d="M1 1L5.2279 5.2279L9.4558 1" stroke="#7C5DFA" strokeWidth="2"/>
      </svg>
    </button>
  )
}

export function InvoicesHeader() {
  return (
    <div className="h-full flex justify-between mb-8">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold leading-normal tracking-[-0.625px]">Invoices</h1>
        <span className="text-purple_impression text-xs font-medium leading-4 tracking-[-0.25px]">7 Invoices</span>
      </div>
      <div className="flex items-center justify-center">
        <FilterInvoicesBtn />
        <div className="ml-4">
          <NewInvoiceBtn />
        </div>
      </div>
    </div>
  )
}