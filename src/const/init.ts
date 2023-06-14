import {
  CustomColumn,
  FIELD_TYPE,
  ITEM_TYPE,
  TOOL_TYPE,
  TableData,
} from "../types/types";
import { getPrettyOptions } from "../utils/utils";

export const initialValuesPrefix = "values";

export const columnsTable: CustomColumn<TableData>[] = [
  {
    Header: "Name",
    accessor: "name",
    editType: FIELD_TYPE.TEXT,
    width: "auto",
    minWidth: 250,
  },
  {
    Header: "Type",
    accessor: "type",
    prettify: true,
    editType: FIELD_TYPE.DROPDOWN,
    options: getPrettyOptions(ITEM_TYPE),
    width: 250,
  },
  {
    Header: "Type of tool",
    accessor: "toolType",
    prettify: true,
    editType: FIELD_TYPE.MULTISELECT,
    options: getPrettyOptions(TOOL_TYPE),
    width: 250,
    maxWidth: 250,
  },
  {
    Header: "External reference",
    accessor: "externalReference",
    editType: FIELD_TYPE.TEXT,
    width: 250,
  },
  {
    Header: "Active",
    accessor: "active",
    editType: FIELD_TYPE.CHECKBOX,
    width: 40,
  },
];

export const initTableData: TableData[] = [
  {
    id: "id1",
    name: "Agent Portal",
    type: ITEM_TYPE.AGENT_TOOL,
    toolType: [TOOL_TYPE.LINKON_LINE],
    externalReference: "QA52562",
    active: true,
  },
  {
    id: "id2",
    name: "Linkon Portal",
    type: ITEM_TYPE.AGENT_TOOL,
    toolType: [],
    externalReference: "QA525621",
    active: false,
  },
  {
    id: "id3",
    name: "Online Store",
    type: ITEM_TYPE.ONLINE_STORE,
    toolType: [],
    externalReference: "A50012",
    active: true,
  },
];

export const newTableData: Omit<TableData, "id"> = {
  type: ITEM_TYPE.UNKNOWN,
  toolType: [],
  active: false,
};
