import { Column, useTable } from "react-table";
import { initTableData } from "../const/init";
import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { color } from "../const/colors";
import { TableData } from "../types/types";
import { getPrettyValue } from "../utils/utils";
import { useMemo, useState } from "react";
import { CheckBox } from "@mui/icons-material";

function MaterialTable() {
  const [data, setData] = useState(initTableData);

  const columnsTable: Column<TableData>[] = useMemo(
    () => [
      { Header: <CheckBox />, id: "checkbox", Cell: () => <CheckBox /> },
      { Header: "Name", accessor: "name" },
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ cell }) => getPrettyValue(cell.value),
      },
      {
        Header: "Type of tool",
        accessor: "toolType",
        Cell: ({ cell }) => getPrettyValue(cell.value),
      },
      { Header: "External reference", accessor: "externalReference" },
      { Header: "Active", accessor: "active" },
    ],
    []
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns: columnsTable,
    data,
  });

  return (
    <Stack spacing={2}>
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
      <Button onClick={() => setData([...data, {}])}>Add Row</Button>
    </Stack>
  );
}

export default MaterialTable;
