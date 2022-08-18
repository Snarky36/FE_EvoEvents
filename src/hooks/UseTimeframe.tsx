import { useEffect, useState } from 'react';

const useTimeframe = (firstValueInit: Date, secondValueInit: Date) => {
  const [firstValue, setFirstValue] = useState(firstValueInit);
  const [secondValue, setSecondValue] = useState(secondValueInit);

  useEffect(() => {
    if (firstValue <= secondValue) return;
    
    const auxValue = firstValue;
    setFirstValue(secondValue);
    setSecondValue(auxValue);
  }, [firstValue, secondValue]);

  return { firstValue, secondValue, setSecondValue, setFirstValue };
};
export default useTimeframe;
