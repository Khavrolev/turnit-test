import { Stack } from "@mui/system";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

interface Props<T extends object> extends CellProps<T> {
  editableRows: Record<string, boolean>;
  changeEditableRows: (value: Record<string, boolean>) => void;
}

function TableEditActions<T extends object>({
  editableRows,
  changeEditableRows,
  ...cell
}: Props<T>) {
  const rowId = cell.row.id;

  function changeEditableRowsStatus(editable: boolean) {
    changeEditableRows({ ...editableRows, [rowId]: editable });
  }
  console.log(editableRows);
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

export default TableEditActions;
