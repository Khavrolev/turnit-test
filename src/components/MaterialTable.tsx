import { useTable } from "react-table";
import { columnsTable, initTableData } from "../const/init";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { color } from "../const/colors";

function MaterialTable() {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns: columnsTable,
    data: initTableData,
  });

  return (
    <Table {...getTableProps()}>
      <TableHead sx={{ backgroundColor: color.header }}>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default MaterialTable;
