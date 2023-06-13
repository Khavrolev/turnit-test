import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  active: boolean;
}

function TableActiveCell({ active }: Props) {
  if (active) {
    return <CheckIcon color="success" />;
  }

  return <ClearIcon color="error" />;
}

export default TableActiveCell;
