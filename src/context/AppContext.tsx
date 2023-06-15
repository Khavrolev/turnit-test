import { ReactNode, createContext, useState } from "react";
import { initTableData } from "../const/init";
import { TableData } from "../types/types";

interface AppContextType {
  data: TableData[];
  setData: (value: TableData[]) => void;
  editableRow: string | undefined;
  setEditableRow: (rowId: string | undefined) => void;
}

export const AppContext = createContext({} as AppContextType);

function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(initTableData);
  const [editableRow, setEditableRow] = useState<string | undefined>();

  const state = {
    data,
    setData,
    editableRow,
    setEditableRow,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppProvider;
