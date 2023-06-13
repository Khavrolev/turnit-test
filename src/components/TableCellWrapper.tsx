import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CellProps } from "react-table";

function TableCellWrapper<T extends object>(cell: CellProps<T>) {
  const { editableRows } = useContext(AppContext);
  const editable = editableRows[cell.row.id];

  if (editable) {
    return <div>world</div>;
  }

  return <div>Hello</div>;
}

export default TableCellWrapper;
