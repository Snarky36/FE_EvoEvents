import NumberComparer from '../utils/NumberComparer';
import { validDescription } from '../utils/RegularExpressions';
import StringComparer from '../utils/StringComparer';

export const validateEventName = (value: string) => {
  const name = new StringComparer(value);

  if (name.isSmaller(1)) return 'Name is required';

  if (name.hasLengthBetween(2, 100)) return 'Name should have between 2 and 100 characters';

  return '';
};

export const validateEventCapacity = (value: number) => {
  const capacity = new NumberComparer(value);
  if (capacity.getValue() === 0) return 'Capacity is required';

  if (capacity.isSmaller(0)) return 'Capacity should be positive';

  if (capacity.isBigger(100001)) return 'Maximum number of participants is 100.000';

  return '';
};

export const validateLocation = (value: string) => {
  const location = new StringComparer(value);
  if (location.isSmaller(1)) return 'Location is required';

  if (location.hasLengthBetween(10, 50)) return 'Location should have between 10 and 50 characters';

  return '';
};

export const validateDescription = (value: string) => {
  if (value.length === 0) return '';
  if (!value.match(validDescription)) return 'Description should have between 1 and 2000 alphanumeric characters';

  return '';
};

export const validateDate = (date: Date) => {
  const currentDate = new Date();

  try {
    if (date.toISOString() == null) {
      return 'Date is invalid';
    }
  } catch (e: any) {
    return 'Date is invalid';
  }

  if (date < currentDate) return 'Date can not be before the current date';
  return '';
};
