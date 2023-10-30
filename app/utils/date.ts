export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  return `${date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })}`;
}