import { useContext } from "react";
import { TableData, TableType } from "./types/types";
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
import TableCustomCell from "./components/cell/TableCustomCell";
import { AppContext } from "./context/AppContext";
import useRowsEditAction from "./hooks/useRowsEditAction";
import { Form } from "react-final-form";
import { columnsTable, initialValuesPrefix, newTableData } from "./const/init";

function App() {
  const { data, setData, editableRow, setEditableRow } = useContext(AppContext);

  const table = useTable<TableData>(
    {
      columns: columnsTable,
      data,
      defaultColumn: { Cell: TableCustomCell },
    },
    useRowSelect,
    useToggleAllRowsSelected,
    useRowsEditAction
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  function handleSubmitForm(values: TableType) {
    setData(values[initialValuesPrefix]);
    setEditableRow(undefined);
  }

  return (
    <Form<TableType>
      onSubmit={handleSubmitForm}
      initialValues={{ [initialValuesPrefix]: data }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
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
                        backgroundColor:
                          editableRow === row.id
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
                                minWidth: cell.column.minWidth,
                                maxWidth: cell.column.maxWidth,
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
            <Button
              onClick={() =>
                setData([...data, { ...newTableData, id: "id" + Date.now() }])
              }
              disabled={!!editableRow}
            >
              Add Row
            </Button>
          </Stack>
        </form>
      )}
    />
  );
}

export default App;
