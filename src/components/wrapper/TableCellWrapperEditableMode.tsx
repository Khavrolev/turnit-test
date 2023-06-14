import { Checkbox, TextField } from "@mui/material";
import { FIELD_TYPE, FieldType, SelectOption } from "../../types/types";
import TableDropdownEditableMode from "./TableDropdownEditableMode";

interface Props<K = unknown> {
  value: K;
  editType?: FieldType | undefined;
  options?: SelectOption[];
}

function TableCellWrapperEditableMode<K = unknown>({
  value,
  editType,
  options,
}: Props<K>) {
  switch (editType) {
    case FIELD_TYPE.TEXT:
      return <TextField defaultValue={value} />;
    case FIELD_TYPE.DROPDOWN:
      return <TableDropdownEditableMode value={value} options={options} />;
    case FIELD_TYPE.MULTISELECT:
      return (
        <TableDropdownEditableMode
          value={value ?? []}
          options={options}
          multiple
        />
      );
    case FIELD_TYPE.CHECKBOX:
      return <Checkbox defaultChecked={!!value} />;
    default:
      return value;
  }
}

export default TableCellWrapperEditableMode;
