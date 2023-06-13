import { CellProps, Hooks } from "react-table";
import { IndeterminateCheckbox } from "../components/IndeterminateCheckbox";

function useToggleAllRowsSelected<T extends object>(hooks: Hooks<T>) {
  return hooks.visibleColumns.push((columns) => [
    {
      id: "select",
      Header: ({ getToggleAllRowsSelectedProps }) => (
        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
      ),
      Cell: ({ row }: CellProps<T>) => (
        <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
      ),
    },
    ...columns,
  ]);
}

export default useToggleAllRowsSelected;
