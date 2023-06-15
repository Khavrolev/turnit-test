import { TableBody, TableBodyProps, TableCell, TableRow } from "@mui/material";
import { COLOR } from "../../const/colors";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Row, TableBodyPropGetter } from "react-table";

interface Props<T extends object> {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<T> | undefined
  ) => TableBodyProps;
  rows: Row<T>[];
  prepareRow: (row: Row<T>) => void;
}

function TableCustomBody<T extends object>({
  getTableBodyProps,
  rows,
  prepareRow,
}: Props<T>) {
  const { editableRow } = useContext(AppContext);

  return (
    <TableBody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <TableRow
            {...row.getRowProps()}
            sx={{
              backgroundColor:
                editableRow === row.id ? COLOR.selected : undefined,
            }}
          >
            {row.cells.map((cell) => {
              return (
                <TableCell
                  {...cell.getCellProps({
                    style: {
                      width: cell.column.width,
                      minWidth: cell.column.minWidth,
                      maxWidth: cell.column.maxWidth,
                    },
                  })}
                >
                  {cell.render("Cell")}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TableCustomBody;
