import { Column } from "react-table";
import { ITEM_TYPE, TOOL_TYPE, TableData } from "../types/types";
import { getPrettyValue } from "../utils/utils";

export const columnsTable: Column<TableData>[] = [
  { Header: "Name", accessor: "name" },
  {
    Header: "Type",
    accessor: "type",
    Cell: ({ cell }) => getPrettyValue(cell.value),
  },
  {
    Header: "Type of tool",
    accessor: "toolType",
    Cell: ({ cell }) => (cell.value ? getPrettyValue(cell.value) : "-"),
  },
  { Header: "External reference", accessor: "externalReference" },
  { Header: "Active", accessor: "active" },
];

export const initTableData: TableData[] = [
  {
    name: "Agent Portal",
    type: ITEM_TYPE.AGENT_TOOL,
    toolType: TOOL_TYPE.LINKON_LINE,
    externalReference: "QA52562",
    active: true,
  },
  {
    name: "Linkon Portal",
    type: ITEM_TYPE.AGENT_TOOL,
    externalReference: "QA525621",
    active: false,
  },
  {
    name: "Online Store",
    type: ITEM_TYPE.ONLINE_STORE,
    externalReference: "A50012",
    active: true,
  },
];
