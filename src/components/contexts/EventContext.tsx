import React, { createContext, useMemo, useState } from 'react';
import { EventObjectTemp, emptyEvent } from '../../interfaces/EventObject';

interface EventContextModel {
  eventObject: EventObjectTemp;
  setEventObjectData: (value: EventObjectTemp) => void;
}

export const EventContext = createContext<EventContextModel>({ eventObject: emptyEvent, setEventObjectData: null });

export const EventContextProvider = ({ children }) => {
  const [eventObjectData, setEventObjectData] = useState<EventObjectTemp>(emptyEvent);

  const contextValue = useMemo(() => {
    return { eventObject: eventObjectData, setEventObjectData: setEventObjectData };
  }, [eventObjectData, setEventObjectData]);

  return <EventContext.Provider value={contextValue}>{children}</EventContext.Provider>;
};
