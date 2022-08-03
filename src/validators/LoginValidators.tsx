import StringComparer from '../utils/StringComparer';
import { noWhiteSpaces } from '../utils/RegularExpressions';

export const validateEmailLogin = (value: string) => {
  const stringComparer = new StringComparer(value);

  if (stringComparer.isSmaller(1)) return 'Field is required';

  if (!value.match(noWhiteSpaces)) return 'Email should not have whitespaces';

  return '';
};

export const validatePasswordLogin = (value: string) => {
  const stringComparer = new StringComparer(value);

  if (stringComparer.isSmaller(1)) return 'Field is required';

  if (!value.match(noWhiteSpaces)) return 'Password should not have whitespaces';

  return '';
};
