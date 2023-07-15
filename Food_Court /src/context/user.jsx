/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from "react";
// import { axios } from "axios";

const userContext = createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      userName: "SignIn",
      contactNumber: null,
      email: null,
    },
  ]);

  return <userContext.Provider value={users}>{children}</userContext.Provider>;
};

export default userContext;
