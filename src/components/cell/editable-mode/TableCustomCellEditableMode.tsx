import { FIELD_TYPE, FieldType, SelectOption } from "../../../types/types";
import { memo } from "react";
import TableTextFieldEditableMode from "./TableTextFieldEditableMode";
import TableDropdownEditableMode from "./TableDropdownEditableMode";
import TableCheckboxEditableMode from "./TableCheckboxEditableMode";

interface Props {
  name: string;
  editType: FieldType | undefined;
  options?: SelectOption[];
}

function TableCustomCellEditableMode({ name, editType, options }: Props) {
  switch (editType) {
    case FIELD_TYPE.TEXT:
      return <TableTextFieldEditableMode name={name} />;
    case FIELD_TYPE.DROPDOWN:
      return <TableDropdownEditableMode name={name} options={options} />;
    case FIELD_TYPE.MULTISELECT:
      return (
        <TableDropdownEditableMode name={name} options={options} multiple />
      );
    case FIELD_TYPE.CHECKBOX:
      return <TableCheckboxEditableMode name={name} />;
    default:
      return null;
  }
}

export default memo(TableCustomCellEditableMode);
