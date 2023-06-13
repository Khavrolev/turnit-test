import { ReactNode, createContext, useState } from "react";
import { initTableData } from "../const/init";
import { TableData } from "../types/types";

interface AppContextType {
  data: TableData[];
  setData: (value: TableData[]) => void;
  editableRows: Record<string, boolean>;
  setEditableRows: (value: Record<string, boolean>) => void;
}

export const AppContext = createContext({} as AppContextType);

function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(initTableData);
  const [editableRows, setEditableRows] = useState<Record<string, boolean>>({});

  const state = {
    data,
    setData,
    editableRows,
    setEditableRows,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export default AppProvider;
