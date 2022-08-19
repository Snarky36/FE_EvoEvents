import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MediatorEventsIdentifiers } from '../../events/EventsIdentifiers';
import Mediator from '../../events/Mediator';
import User from '../../interfaces/User';
import { isEmptyObject } from '../../utils/ObjectUtils';

interface UserContextModel {
  readonly user: User;
  setUserData: (value: User) => void;
  readonly isUserLoggedIn: boolean;
}

export const UserContext = createContext<UserContextModel>({ user: {}, setUserData: null, isUserLoggedIn: false });

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState<User>(JSON.parse(sessionStorage.getItem('user')) || {});
  const navigate = useNavigate();

  const isUserLoggedIn = useMemo(() => {
    return !isEmptyObject(userData);
  }, [userData]);

  const contextValue = useMemo(() => {
    return { user: userData, setUserData: setUserData, isUserLoggedIn };
  }, [userData, setUserData, isUserLoggedIn]);

  useEffect(() => {
    const subscription = Mediator.subscribe(MediatorEventsIdentifiers.userLoggedIn, ({ userData: user }) => {
      setUserData(user);
      sessionStorage.setItem('user', JSON.stringify(user));
      navigate('/events/1', { replace: true });
    });

    return () => subscription.unsubscribe();
  }, []);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
