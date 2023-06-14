import { useContext, useMemo } from "react";
import { CustomColumn, FIELD_TYPE, TableData } from "./types/types";
import { useRowSelect, useTable } from "react-table";
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
import TableCellWrapper from "./components/TableCellWrapper";
import { AppContext } from "./context/AppContext";
import useRowsEditAction from "./hooks/useRowsEditAction";

function App() {
  const { data, setData, editableRows } = useContext(AppContext);

  const columnsTable: CustomColumn<TableData>[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        editType: FIELD_TYPE.TEXT,
      },
      {
        Header: "Type",
        accessor: "type",
        prettify: true,
        editType: FIELD_TYPE.DROPDOWN,
      },
      {
        Header: "Type of tool",
        accessor: "toolType",
        prettify: true,
        editType: FIELD_TYPE.MULTISELECT,
      },
      {
        Header: "External reference",
        accessor: "externalReference",
        editType: FIELD_TYPE.TEXT,
      },
      {
        Header: "Active",
        accessor: "active",
        editType: FIELD_TYPE.CHECKBOX,
      },
    ],
    []
  );

  const table = useTable<TableData>(
    {
      columns: columnsTable,
      data,
      defaultColumn: { Cell: TableCellWrapper },
    },
    useRowSelect,
    useToggleAllRowsSelected,
    useRowsEditAction
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

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
                    <TableCell
                      {...cell.getCellProps({
                        style: {
                          width: cell.column.width,
                        },
                      })}
                    >
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
