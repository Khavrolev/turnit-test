import { Stack } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

interface Props {
  rowId: string;
  editableRows: Record<string, boolean>;
  changeEditableRows: (value: Record<string, boolean>) => void;
}

function TableEditActionsCell({
  rowId,
  editableRows,
  changeEditableRows,
}: Props) {
  function changeEditableRowsStatus(editable: boolean) {
    changeEditableRows({ ...editableRows, [rowId]: editable });
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
