import { createContext } from "react";

export const RecipiContext = createContext();

const RecipiProvider = ({ children }) => {
  return <RecipiContext.Provider value={'d'}>{children}</RecipiContext.Provider>;
};

export default RecipiProvider;
