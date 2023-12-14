import { InvoiceLabel } from "@/app/dashboard/InvoiceLabel";
import { INVOICES } from "../../../data";
import { InvoiceId } from "@/app/components/InvoiceId";
import { DescriptiveText } from "@/app/components/DescriptiveText";
import { formatDate } from "@/app/utils/date";

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
      <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
        <div className="border w-full">
          <div className="mb-7">
            <div className="mb-[-2px]">
              <InvoiceId id={invoice.id} />
            </div>
            <DescriptiveText text={invoice.description} />
          </div>

          <div>
            <div>
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

            <div className="flex flex-row border border-blue-500">
              {/* Invoice Date & Due */}
              <div className="flex flex-col border border-red-500 mt-7 mr-10">
                <div>
                  <DescriptiveText text="Invoice Date" />
                  <p className="font-bold text-base mt-3">
                    {formatDate(invoice.createdAt)}
                  </p>
                </div>

                <div className="mt-10">
                  <DescriptiveText text="Payment Due" />
                  <p className=" font-bold text-base mt-3">
                    {formatDate(invoice.paymentDue)}
                  </p>
                </div>
              </div>

              <div className="mt-7 border border-orange-400">
                <DescriptiveText text="Bill To" />
                <p className=" font-bold text-base mt-2">
                  {invoice.clientName}
                </p>

                <div className="mt-2">
                  <p>
                    <DescriptiveText text={invoice.clientAddress.street} />
                  </p>
                  <p>
                    <DescriptiveText text={invoice.clientAddress.city} />
                  </p>
                  <p>
                    <DescriptiveText text={invoice.clientAddress.postCode} />
                  </p>
                  <p>
                    <DescriptiveText text={invoice.clientAddress.country} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  params: { id: string };
}
