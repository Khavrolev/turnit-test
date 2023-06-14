import { Hooks } from "react-table";
import TableEditActionsCell from "../components/TableEditActionsCell";

function useRowsEditAction<T extends object>(hooks: Hooks<T>) {
  return hooks.visibleColumns.push((columns) => [
    ...columns,
    {
      id: "action",
      Cell: TableEditActionsCell,
      width: 40,
    },
  ]);
}

export default useRowsEditAction;
