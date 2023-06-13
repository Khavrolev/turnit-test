import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { CellProps } from "react-table";

function TableEditActionsCell<T extends object>(cell: CellProps<T>) {
  const rowId = cell.row.id;
  const { editableRows, setEditableRows } = useContext(AppContext);

  function changeEditableRowsStatus(editable: boolean) {
    setEditableRows({ ...editableRows, [rowId]: editable });
  }

  if (editableRows[rowId]) {
    return (
      <Stack sx={{ display: "inline-flex" }}>
        <IconButton onClick={() => changeEditableRowsStatus(false)}>
          <CheckIcon />
        </IconButton>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </Stack>
    );
  }

  return (
    <IconButton onClick={() => changeEditableRowsStatus(true)}>
      <EditIcon />
    </IconButton>
  );
}

export default TableEditActionsCell;
