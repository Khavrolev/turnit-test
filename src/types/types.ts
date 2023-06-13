import { CellProps, ColumnInstance } from "react-table";

export type ObjectValues<T> = T[keyof T];

export interface CellCustomProps<T extends object, K = unknown>
  extends CellProps<T, K> {
  column: ColumnInstance<T> & {
    prettify?: boolean;
  };
}

export const ITEM_TYPE = {
  AGENT_TOOL: "AGENT_TOOL",
  ONLINE_STORE: "ONLINE_STORE",
  OFFLINE_STORE: "OFFLINE_STORE",
  UNKNOWN: "UNKNOWN",
} as const;

export type ItemType = ObjectValues<typeof ITEM_TYPE>;

export const TOOL_TYPE = {
  LINKON_LINE: "LINKON_LINE",
  ABRAHAM_LINE: "ABRAHAM_LINE",
  WASHINGTON_STORE: "WASHINGTON_STORE",
  UNKNOWN: "UNKNOWN",
} as const;

export type ToolType = ObjectValues<typeof TOOL_TYPE>;

export const FIELD_TYPE = {
  TEXT: "TEXT",
  DROPDOWN: "DROPDOWN",
  MULTISELECT: "MULTISELECT",
  CHECKBOX: "CHECKBOX",
} as const;

export type FieldType = ObjectValues<typeof FIELD_TYPE>;

export interface TableData {
  name?: string;
  type?: ItemType;
  toolType?: ToolType;
  externalReference?: string;
  active?: boolean;
}
