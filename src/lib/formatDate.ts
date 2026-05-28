const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatDate(date: string): string {
  const [year, month] = date.split("-");
  if (!month) return year;
  const index = Number(month) - 1;
  if (index < 0 || index > 11) return year;
  return `${MONTHS[index]} ${year}`;
}

export function formatDateRange(start: string, end: string | null): string {
  const left = formatDate(start);
  const right = end ? formatDate(end) : "Present";
  return `${left} – ${right}`;
}
