import { SelectOption } from "../types/types";

export function getPrettyValue(value: string) {
  return (
    value[0].toUpperCase() + value.slice(1).toLowerCase().replaceAll("_", " ")
  );
}

export function getPrettyOptions(
  object: Record<string, string>
): SelectOption[] {
  return Object.values(object).map((value) => ({
    value,
    label: getPrettyValue(value),
  }));
}
