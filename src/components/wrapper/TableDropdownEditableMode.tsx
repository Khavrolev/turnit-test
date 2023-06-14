import { Select, SelectProps } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { SelectOption } from "../../types/types";

interface Props<T = unknown> extends SelectProps<T> {
  value: T;
  options?: SelectOption[];
}

function TableDropdownEditableMode<T = unknown>({
  value,
  options = [],
  multiple,
}: Props<T>) {
  return (
    <Select defaultValue={value} multiple={multiple} sx={{ width: "100%" }}>
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default TableDropdownEditableMode;
