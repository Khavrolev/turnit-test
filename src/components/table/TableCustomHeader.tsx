import { TableCell, TableHead, TableRow } from "@mui/material";
import { COLOR } from "../../const/colors";
import { HeaderGroup } from "react-table";

interface Props<T extends object> {
  headerGroups: HeaderGroup<T>[];
}

function TableCustomHeader<T extends object>({ headerGroups }: Props<T>) {
  return (
    <TableHead sx={{ backgroundColor: COLOR.header }}>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <TableCell {...column.getHeaderProps()}>
              {column.render("Header")}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}

export default TableCustomHeader;
