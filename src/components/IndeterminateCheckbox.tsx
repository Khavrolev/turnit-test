import { Checkbox } from "@mui/material";
import { forwardRef } from "react";
import { TableToggleRowsSelectedProps } from "react-table";

export const IndeterminateCheckbox = forwardRef<
  HTMLButtonElement,
  TableToggleRowsSelectedProps
>((props, ref) => <Checkbox ref={ref} {...props} />);
