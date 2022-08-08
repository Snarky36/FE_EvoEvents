import React, { createContext, useMemo, useState } from 'react';
import EventObject, { emptyEvent } from '../../interfaces/Event';

interface EventContextModel {
  eventObject: EventObject;
  setEventObjectData: (value: EventObject) => void;
}

export const EventContext = createContext<EventContextModel>({ eventObject: emptyEvent, setEventObjectData: null });

export const EventContextProvider = ({ children }) => {
  const [eventObjectData, setEventObjectData] = useState<EventObject>(emptyEvent);

  const contextValue = useMemo(() => {
    return { eventObject: eventObjectData, setEventObjectData: setEventObjectData };
  }, [eventObjectData, setEventObjectData]);

  return <EventContext.Provider value={contextValue}>{children}</EventContext.Provider>;
};
