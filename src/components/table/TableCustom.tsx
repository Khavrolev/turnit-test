import { Table } from "@mui/material";
import { TableInstance } from "react-table";
import TableCustomHeader from "./TableCustomHeader";
import TableCustomBody from "./TableCustomBody";

interface Props<T extends object> {
  table: TableInstance<T>;
}

function TableCustom<T extends object>({ table }: Props<T>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <Table {...getTableProps()}>
      <TableCustomHeader headerGroups={headerGroups} />
      <TableCustomBody
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      />
    </Table>
  );
}

export default TableCustom;
