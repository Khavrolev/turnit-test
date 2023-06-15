import { useContext } from "react";
import { TableData, TableType } from "./types/types";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { AppContext } from "./context/AppContext";
import { Form } from "react-final-form";
import { initialValuesPrefix, newTableData, tableColumns } from "./const/init";
import TableCustom from "./components/table/TableCustom";
import { useRowSelect, useTable } from "react-table";
import TableCustomCell from "./components/cell/TableCustomCell";
import useToggleAllRowsSelected from "./hooks/useToggleAllRowsSelected";
import useRowsEditAction from "./hooks/useRowsEditAction";

function App() {
  const { data, setData, editableRow, setEditableRow } = useContext(AppContext);

  const table = useTable<TableData>(
    {
      columns: tableColumns,
      data,
      defaultColumn: { Cell: TableCustomCell },
    },
    useRowSelect,
    useToggleAllRowsSelected,
    useRowsEditAction
  );

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
            <TableCustom table={table} />
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
