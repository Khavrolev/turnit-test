import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { getPrettyValue } from "../../utils/utils";
import { CellCustomProps } from "../../types/types";
import TableBooleanCell from "../TableBooleanCell";
import { isBoolean, isDefined, isString } from "../../utils/typeguards";
import TableCellWrapperEditableMode from "./TableCellWrapperEditableMode";

function TableCellWrapper<T extends object, K = unknown>(
  cell: CellCustomProps<T, K>
) {
  const { editableRows } = useContext(AppContext);
  const editable = editableRows[cell.row.id];
  const value = cell.cell.value;
  const { prettify, editType, options } = cell.column;

  if (editable) {
    return (
      <TableCellWrapperEditableMode<K>
        value={value}
        editType={editType}
        options={options}
      />
    );
  }

  if (!isDefined(value)) {
    return "-";
  }

  if (isString(value)) {
    return prettify ? getPrettyValue(value) : value;
  }

  if (isBoolean(value)) {
    return <TableBooleanCell active={value} />;
  }

  return value;
}

export default TableCellWrapper;
