import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  active: boolean;
}

function TableBooleanCell({ active }: Props) {
  const iconProps = { sx: { width: "100%" } };

  if (active) {
    return <CheckIcon color="success" {...iconProps} />;
  }

  return <ClearIcon color="error" {...iconProps} />;
}

export default TableBooleanCell;
