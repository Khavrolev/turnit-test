export function getPrettyValue(value: string) {
  return (
    value[0].toUpperCase() + value.slice(1).toLowerCase().replaceAll("_", " ")
  );
}
