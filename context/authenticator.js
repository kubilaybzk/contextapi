import React, { useState, useContext } from "react";
const UserContext = React.createContext();

const UserConsumer = ({ children }) => {
  const [user, setUser] = useState();

  function LogIn() {
    let userName = "Kubilay";
    setUser(userName);
    console.log(user);
  }

  function Logout() {
    setUser(null);
    console.log(user);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        LogIn,
        Logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserConsumer };
