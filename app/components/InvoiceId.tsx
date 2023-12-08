export function InvoiceId({ id }: Props) {
  return (
    <div className="row-span-2 font-bold text-xs tracking-[-0.25px] leading-4 justify-end">
      <span className="text-true_lavender">#</span>
      <span>{id}</span>
    </div>
  );
}

interface Props {
  id: string;
}
