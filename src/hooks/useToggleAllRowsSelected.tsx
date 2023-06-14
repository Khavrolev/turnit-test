import { CellProps, Hooks } from "react-table";
import { IndeterminateCheckbox } from "../components/IndeterminateCheckbox";

function useToggleAllRowsSelected<T extends object>(hooks: Hooks<T>) {
  return hooks.visibleColumns.push((columns) => [
    {
      id: "selection",
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
      ),
      Cell: ({ row }: CellProps<T>) => (
        <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
      ),
      width: 40,
    },
    ...columns,
  ]);
}

export default useToggleAllRowsSelected;
