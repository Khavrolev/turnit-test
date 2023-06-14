import { CellProps, Column, ColumnInstance } from "react-table";
import { initialValuesPrefix } from "../const/init";

export type ObjectValues<T> = T[keyof T];

export type SelectOption = { value: string; label: string };

export type CustomColumnInstance = {
  prettify?: boolean;
  editType?: FieldType;
  options?: SelectOption[];
};

export type CustomColumn<T extends object> = Column<T> & CustomColumnInstance;

export type CellCustomProps<T extends object, K = unknown> = CellProps<T, K> & {
  column: ColumnInstance<T> & CustomColumnInstance;
};

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

export type TableData = {
  id: string;
  name?: string;
  type: ItemType;
  toolType: ToolType[];
  externalReference?: string;
  active: boolean;
};

export type TableType = {
  [initialValuesPrefix]: TableData[];
};
