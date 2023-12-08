import { InvoiceLabel } from "@/app/dashboard/InvoiceLabel";
import { INVOICES } from "../../../data";
import { InvoiceId } from "@/app/components/InvoiceId";
import { DescriptiveText } from "@/app/components/DescriptiveText";

export default function InvoiceView({ params }: Props) {
  const invoice = INVOICES.find((invoice) => invoice.id === params.id)!;
  console.log(params);
  console.log(invoice);

  return (
    <div className="px-6">
      <div
        className="h-24 w-full bg-white rounded-lg shadow-sm flex 
        justify-between items-center px-6"
      >
        <span className="font-medium text-xs mt-1 text-purple_impression">
          Status
        </span>
        <InvoiceLabel intent={invoice?.status} />
      </div>
      <div className="bg-white rounded-lg shadow-sm flex p-6 mt-4">
        <div className="flex-col border">

          <div className="flex-col mb-7">
            <div className="mb-[-2px]">
              <InvoiceId id={invoice.id} />
            </div>
            <DescriptiveText text={invoice.description} />
          </div>

          <div className="flex-col">
            <p>
              <DescriptiveText text={invoice.senderAddress.street} />
            </p>
            <p>
              <DescriptiveText text={invoice.senderAddress.city} />
            </p>
            <p>
              <DescriptiveText text={invoice.senderAddress.postCode} />
            </p>
            <p>
              <DescriptiveText text={invoice.senderAddress.country} />
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

interface Props {
  params: { id: string };
}
