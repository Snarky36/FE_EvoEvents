import React, { createContext, useMemo, useState } from 'react';
import User, { emptyUser } from '../../interfaces/User';

interface UserContextModel {
  user: User;
}

export const UserContext = createContext<UserContextModel>({ user: emptyUser });

export const UserContextProvider = ({ children }) => {
  const [userData] = useState<User>(emptyUser);

  const contextValue = useMemo(() => {
    return { user: userData };
  }, [userData]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
