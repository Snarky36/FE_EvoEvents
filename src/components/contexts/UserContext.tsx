import React, { createContext, useMemo, useState } from 'react';
import User, { emptyUser } from '../../interfaces/User';

interface UserContextModel {
  user: User;
  setUserData: (value: User) => void;
}

export const UserContext = createContext<UserContextModel>({ user: emptyUser, setUserData: null });

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState<User>(emptyUser);

  const contextValue = useMemo(() => {
    return { user: userData, setUserData: setUserData };
  }, [userData, setUserData]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
