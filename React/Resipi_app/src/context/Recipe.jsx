import {Children, createContext} from "react";

export const RecipiContext = createContext();

const RecipiProvider = ({Children}) => {
  return <RecipiContext.Provider value={'d'}>{Children}</RecipiContext.Provider>;
};

export default RecipiProvider;
