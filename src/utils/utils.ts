export function getPrettyValue(value: string | undefined) {
  if (!value) {
    return "-";
  }

  return (
    value[0].toUpperCase() + value.slice(1).toLowerCase().replaceAll("_", " ")
  );
}
