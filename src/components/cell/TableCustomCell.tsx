import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { getPrettyValue } from "../../utils/utils";
import { CellCustomProps } from "../../types/types";
import TableBooleanCell from "./TableBooleanCell";
import { isBoolean, isDefined, isString } from "../../utils/typeguards";
import { initialValuesPrefix } from "../../const/init";
import { Typography } from "@mui/material";
import TableCustomCellEditableMode from "./editable-mode/TableCustomCellEditableMode";

function TableCustomCell<T extends object, K = unknown>(
  cell: CellCustomProps<T, K>
) {
  const { editableRow } = useContext(AppContext);

  const rowId = cell.row.id;
  const editable = editableRow === rowId;
  const value = cell.cell.value;
  const { prettify, editType, options, id: columnId } = cell.column;

  function getContent(value: unknown) {
    if (!isDefined(value) || (Array.isArray(value) && !value.length)) {
      return "-";
    }

    if (isString(value)) {
      return prettify ? getPrettyValue(value) : value;
    }

    if (Array.isArray(value)) {
      return value
        .map((item) =>
          isString(item) && prettify ? getPrettyValue(item) : item
        )
        .join(", ");
    }

    return null;
  }

  if (editable) {
    return (
      <TableCustomCellEditableMode
        name={`${initialValuesPrefix}.[${rowId}].${columnId}`}
        editType={editType}
        options={options}
      />
    );
  }

  if (isBoolean(value)) {
    return <TableBooleanCell active={value} />;
  }

  return <Typography>{getContent(value)}</Typography>;
}

export default TableCustomCell;
