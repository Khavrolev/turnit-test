import { ITEM_TYPE, TOOL_TYPE, TableData } from "../types/types";

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
