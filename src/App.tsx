import { useContext, useMemo } from "react";
import { TableData } from "./types/types";
import { Column, useRowSelect, useTable } from "react-table";
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
import TableCellWrapper from "./components/TableCellWrapper";
import { AppContext } from "./context/AppContext";

function App() {
  const { data, setData, editableRows } = useContext(AppContext);

  const columnsTable: Column<TableData>[] = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      {
        Header: "Type",
        accessor: "type",
        // Cell: ({ cell }) => getPrettyValue(cell.value),
      },
      {
        Header: "Type of tool",
        accessor: "toolType",
        // Cell: ({ cell }) => getPrettyValue(cell.value),
      },
      { Header: "External reference", accessor: "externalReference" },
      {
        Header: "Active",
        accessor: "active",
        // Cell: ({ cell }) => <TableActiveCell active={!!cell.value} />,
      },
      {
        id: "action",
        Cell: TableEditActionsCell,
        disableSortBy: true,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<TableData>(
      {
        columns: columnsTable,
        data,
        defaultColumn: {
          Cell: TableCellWrapper,
        },
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
              <TableRow
                {...row.getRowProps()}
                sx={{
                  backgroundColor: editableRows[row.id]
                    ? color.selected
                    : "transparent",
                }}
              >
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
