export function formatCurrency(amount: number) {
  const currencyFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  });
  return currencyFormatter.format(amount);
}