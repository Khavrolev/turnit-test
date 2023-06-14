import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { CellProps } from "react-table";
import { useForm } from "react-final-form";
import { TableType } from "../types/types";

function TableEditActionsCell<T extends object>(cell: CellProps<T>) {
  const { id: rowId } = cell.row;
  const { editableRow, changeEditableRow } = useContext(AppContext);

  const { reset } = useForm<TableType>();

  function handleResetChanges() {
    reset();
    changeEditableRow(undefined);
  }

  if (editableRow === rowId) {
    return (
      <Stack sx={{ display: "inline-flex" }}>
        <IconButton type="submit">
          <CheckIcon />
        </IconButton>
        <IconButton onClick={handleResetChanges}>
          <ClearIcon />
        </IconButton>
      </Stack>
    );
  }

  return (
    <IconButton onClick={() => changeEditableRow(rowId)}>
      <EditIcon />
    </IconButton>
  );
}

export default TableEditActionsCell;
