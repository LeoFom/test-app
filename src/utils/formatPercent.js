export function formatPercent(value) {
  if (value == null) return "-";

  return `${value.toFixed(2)}%`;
}