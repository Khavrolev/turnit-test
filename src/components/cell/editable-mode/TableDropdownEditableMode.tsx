import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { SelectOption } from "../../../types/types";
import { Field } from "react-final-form";

interface Props {
  name: string;
  options?: SelectOption[];
  multiple?: boolean;
}

function TableDropdownEditableMode({ name, options = [], multiple }: Props) {
  return (
    <Field
      name={name}
      component={({ input, ...rest }) => (
        <Select
          {...input}
          {...rest}
          multiple={multiple}
          size="small"
          sx={{ width: "100%" }}
          onChange={input.onChange}
        >
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
}

export default TableDropdownEditableMode;
