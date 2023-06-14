import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { getPrettyValue } from "../../utils/utils";
import { CellCustomProps } from "../../types/types";
import TableBooleanCell from "../TableBooleanCell";
import { isBoolean, isDefined, isString } from "../../utils/typeguards";
import TableCustomCellEditableMode from "./TableCustomCellEditableMode";
import { initialValuesPrefix } from "../../const/init";

function TableCustomCell<T extends object, K = unknown>(
  cell: CellCustomProps<T, K>
) {
  const { editableRow } = useContext(AppContext);

  const rowId = cell.row.id;
  const editable = editableRow === rowId;
  const value = cell.cell.value;
  const { prettify, editType, options, id: columnId } = cell.column;

  if (editable) {
    return (
      <TableCustomCellEditableMode
        name={`${initialValuesPrefix}.[${rowId}].${columnId}`}
        editType={editType}
        options={options}
      />
    );
  }

  if (!isDefined(value) || (Array.isArray(value) && !value.length)) {
    return "-";
  }

  if (isString(value)) {
    return prettify ? getPrettyValue(value) : value;
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => (isString(item) && prettify ? getPrettyValue(item) : item))
      .join(", ");
  }

  if (isBoolean(value)) {
    return <TableBooleanCell active={value} />;
  }

  return value;
}

export default TableCustomCell;
