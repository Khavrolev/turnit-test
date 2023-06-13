import { useMemo, useState } from "react";
import { initTableData } from "./const/init";
import { TableData } from "./types/types";
import { Column, useRowSelect, useTable } from "react-table";
import { getPrettyValue } from "./utils/utils";
import useToggleAllRowsSelected from "./hooks/useToggleAllRowsSelected";
import { Stack } from "@mui/system";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { color } from "./const/colors";
import TableEditActionsCell from "./components/TableEditActionsCell";
import TableActiveCell from "./components/TableActiveCell";

function App() {
  const [data, setData] = useState(initTableData);
  const [editableRows, setEditableRows] = useState<Record<string, boolean>>({});

  const columnsTable: Column<TableData>[] = useMemo(
    () => [
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
      {
        Header: "Active",
        accessor: "active",
        Cell: ({ cell }) => <TableActiveCell active={!!cell.value} />,
      },
      {
        id: "action",
        Cell: ({ row }) => (
          <TableEditActionsCell
            rowId={row.id}
            editableRows={editableRows}
            changeEditableRows={setEditableRows}
          />
        ),
        disableSortBy: true,
      },
    ],
    [editableRows]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columnsTable,
        data,
      },
      useRowSelect,
      useToggleAllRowsSelected
    );

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
        <TableBody {...getTableBodyProps()}>
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

export default App;
