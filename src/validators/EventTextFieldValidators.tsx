import NumberComparer from '../utils/NumberComparer';
import { validDescription } from '../utils/RegularExpressions';
import StringComparer from '../utils/StringComparer';

export const validateEventName = (value: string) => {
  const name = new StringComparer(value);

  if (name.isSmaller(1)) return 'Name is required';

  if (!name.hasLengthBetween(2, 100)) return 'Name should have between 2 and 100 characters';

  return '';
};

export const validateEventCapacity = (value: number) => {
  const capacity = new NumberComparer(value);
  if (capacity.getValue() === 0) return 'Capacity is required';

  if (capacity.isSmaller(0)) return 'Capacity should be positive';

  if (capacity.isBigger(100000)) return 'Maximum number of participants is 100.000';

  return '';
};

export const validateLocation = (value: string) => {
  const location = new StringComparer(value);
  if (location.isSmaller(1)) return 'Location is required';

  if (!location.hasLengthBetween(9, 50)) return 'Location should have between 10 and 50 characters';

  return '';
};

export const validateDescription = (value: string) => {
  if (!value.match(validDescription)) return 'Description should have between 1 and 2000 alphanumeric characters';

  return '';
};
