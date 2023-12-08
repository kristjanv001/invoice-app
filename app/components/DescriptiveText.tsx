export function DescriptiveText({ text }: Props) {
  return (
    <span className="text-xs font-medium text-true_lavender leading-4">
      {text}
    </span>
  );
}

interface Props {
  text: string;
}