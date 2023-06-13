import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getPrettyValue } from "../utils/utils";
import { CellCustomProps } from "../types/types";
import TableActiveCell from "./TableActiveCell";
import { isBoolean, isDefined, isString } from "../utils/typeguards";

function TableCellWrapper<T extends object, K = unknown>(
  cell: CellCustomProps<T, K>
) {
  const { editableRows } = useContext(AppContext);
  const editable = editableRows[cell.row.id];
  const value = cell.cell.value;
  const prettify = cell.column.prettify;

  if (editable) {
    return value;
  }

  if (!isDefined(value)) {
    return "-";
  }

  if (isString(value)) {
    return prettify ? getPrettyValue(value) : value;
  }

  if (isBoolean(value)) {
    return <TableActiveCell active={value} />;
  }

  return value;
}

export default TableCellWrapper;
