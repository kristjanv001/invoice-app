"use client";
import { Button } from "./Button";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckedState } from "../interfaces/checked";
import { Status } from "../interfaces/invoice";
import { capitalize } from "../utils/capitalize";

function NewInvoiceBtn() {
  return (
    <Button
      intent="primary"
      className="flex justify-center items-center pl-[6px] pr-[14px] py-[6px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="white" />
        <path
          d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z"
          fill="#7C5DFA"
        />
      </svg>
      <span className="ml-2 mt-0.5">New</span>
    </Button>
  );
}

function FilterCheckBox(props: FilterCheckBoxProps) {
  const { filterBy, checked, handleCheckboxChange } = props;

  return (
    <div className="mb-4 last:mb-0">
      <input
        className="
          bg-stoic_white border-transparent hover:border-forgotten_purple 
          text-venetian_nights focus:ring-forgotten_purple 
          mr-3 rounded-sm cursor-pointer p-2 duration-200"
        type="checkbox"
        id={filterBy}
        name={filterBy}
        onChange={() => handleCheckboxChange(filterBy)}
        checked={checked}
      />
      <label
        className="text-xs mt-0.5 font-bold tracking-[-0.25px]"
        htmlFor={filterBy}
      >
        {capitalize(filterBy)}
      </label>
    </div>
  );
}

function FilterBtn(props: FilterBtnProps) {
  const [isRotated, setIsRotated] = useState(false);

  const { checked, handleCheckboxChange } = props;

  return (
    <Popover as="div" className="relative inline-block text-left">
      <Popover.Button
        onClick={() => setIsRotated(!isRotated)}
        className="flex justify-center items-center px-2 py-2"
      >
        <span className="font-bold text-xs leading-none mt-0.5 tracking-[-0.25px] mr-2">
          Filter
        </span>
        <svg
          className={`${isRotated && "rotate-180"} duration-200`}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
        >
          <path
            d="M1 1L5.2279 5.2279L9.4558 1"
            stroke="#7C5DFA"
            strokeWidth="2"
          />
        </svg>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className="absolute right-0 mt-6 min-w-full w-48 origin-top-right 
              rounded-lg bg-white 
              shadow-xl ring-1 ring-black/5 focus:outline-none 
              flex flex-col p-6"
        >
          <div className="flex flex-col content-center">
            <FilterCheckBox
              filterBy="draft"
              checked={checked.draft}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterCheckBox
              filterBy="pending"
              checked={checked.pending}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterCheckBox
              filterBy="paid"
              checked={checked.paid}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export function InvoicesHeader(props: InvoicesHeaderProps) {
  const { amount } = props;
  return (
    <div className="h-full flex justify-between mb-8">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold leading-normal tracking-[-0.625px]">
          Invoices
        </h1>
        <span className="text-purple_impression text-xs font-medium leading-4 tracking-[-0.25px]">
          {amount} Invoices
        </span>
      </div>
      <div className="flex items-center justify-center">
        <FilterBtn {...props} />
        <div className="ml-4">
          <NewInvoiceBtn />
        </div>
      </div>
    </div>
  );
}

interface FilterCheckBoxProps {
  filterBy: Status;
  checked: boolean;
  handleCheckboxChange: (filterBy: Status) => void;
}

interface InvoicesHeaderProps {
  checked: CheckedState;
  handleCheckboxChange: (filterBy: Status) => void;
  amount: number
}

interface FilterBtnProps extends InvoicesHeaderProps {}
