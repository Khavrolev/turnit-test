import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CellProps } from "react-table";
import { getPrettyValue } from "../utils/utils";
import { FieldType } from "../types/types";
import TableActiveCell from "./TableActiveCell";
import { isBoolean, isDefined, isString } from "../utils/typeguards";

interface Props<T extends object, K = unknown> extends CellProps<T, K> {
  type?: FieldType;
  prettify?: boolean;
}

function TableCellWrapper<T extends object, K = unknown>({
  prettify,
  ...cell
}: Props<T, K>) {
  const { editableRows } = useContext(AppContext);
  const editable = editableRows[cell.row.id];
  const value = cell.cell.value;

  if (editable) {
    return <div>world</div>;
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
