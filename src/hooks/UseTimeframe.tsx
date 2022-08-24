import { useCallback, useEffect, useMemo, useState } from 'react';

const useTimeframe = (firstValueInit: Date, secondValueInit: Date, validator: (value) => string) => {
  const [firstValue, setFirstValue] = useState(firstValueInit);
  const [secondValue, setSecondValue] = useState(secondValueInit);
  const [startingDateErrors, setStartingDateErrors] = useState<string | string[]>('');
  const [endingDateErrors, setEndingDateErrors] = useState<string | string[]>('');

  const hasStartingDateErrors = useMemo(() => startingDateErrors.length > 0, [startingDateErrors]);
  const hasEndingDateErrors = useMemo(() => endingDateErrors.length > 0, [endingDateErrors]);

  const validateStartingDate = useCallback(() => {
    setStartingDateErrors(validator(firstValue));
  }, [firstValue]);

  const validateEndingDate = useCallback(() => {
    setEndingDateErrors(validator(secondValue));
  }, [secondValue]);

  useEffect(() => {
    if (!hasStartingDateErrors || !hasEndingDateErrors) return;

    validateStartingDate();
    validateEndingDate();
  }, [hasStartingDateErrors, hasEndingDateErrors, validateStartingDate, validateEndingDate]);

  useEffect(() => {
    if (firstValue > secondValue) {
      const auxValue = firstValue;
      setFirstValue(secondValue);
      setSecondValue(auxValue);
    }
  }, [firstValue, secondValue]);

  return {
    firstValue,
    secondValue,
    setSecondValue,
    setFirstValue,
    startingDateErrors,
    setStartingDateErrors,
    endingDateErrors,
    setEndingDateErrors,
    validateStartingDate,
    validateEndingDate,
    hasStartingDateErrors,
    hasEndingDateErrors
  };
};
export default useTimeframe;
