import React, { createContext, useMemo, useState } from 'react';

interface FilterContextModel {
  readonly eventType: number;
  attending: boolean;
  viewAll: boolean;
  setEventTypeData: (value: number) => void;
  setAttendingData: (value: boolean) => void;
  setViewAllData: (value: boolean) => void;
}

export const FilterContext = createContext<FilterContextModel>({
  eventType: 0,
  attending: false,
  viewAll: true,
  setEventTypeData: null,
  setAttendingData: null,
  setViewAllData: null
});

export const FilterContextProvider = ({ children }) => {
  const [eventTypeData, setEventTypeData] = useState(0);
  const [attendingData, setAttendingData] = useState(false);
  const [viewAllData, setViewAllData] = useState(true);

  const contextValue = useMemo(() => {
    return {
      eventType: eventTypeData,
      attending: attendingData,
      viewAll: viewAllData,
      setEventTypeData: setEventTypeData,
      setAttendingData: setAttendingData,
      setViewAllData: setViewAllData
    };
  }, [eventTypeData, setEventTypeData, attendingData, setAttendingData, viewAllData, setViewAllData]);

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};
