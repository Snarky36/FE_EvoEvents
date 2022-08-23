import StringComparer from '../utils/StringComparer';
import { noWhiteSpaces, validCompanyRegex, validEmailRegex, validNameRegex } from '../utils/RegularExpressions';

export const validateFirstNameRegister = (value: string) => {
  const stringComparer = new StringComparer(value);
  const stringComparerTruncated = new StringComparer(stringComparer.truncateString());

  if (
    stringComparer.hasLengthBetween(2, 100) ||
    stringComparerTruncated.hasLengthBetween(2, 100) ||
    !value.match(validNameRegex)
  )
    return 'First Name should have between 2 and 100 alpha characters, including "-" and " "';

  return '';
};

export const validateLastNameRegister = (value: string) => {
  const stringComparer = new StringComparer(value);
  const stringComparerTruncated = new StringComparer(stringComparer.truncateString());

  if (
    stringComparer.hasLengthBetween(2, 100) ||
    stringComparerTruncated.hasLengthBetween(2, 100) ||
    !value.match(validNameRegex)
  )
    return 'Last Name should have between 2 and 100 alpha characters, including "-" and " "';

  return '';
};

export const validateEmailRegister = (value: string) => {
  const stringComparer = new StringComparer(value);

  if (stringComparer.hasLengthBetween(7, 74)) return 'Email should have between 7 and 74 characters';

  if (!value.match(validEmailRegex))
    return 'Email should have a valid format {alphanumeric and underline}@{string}.com';

  return '';
};

export const validateCompanyRegister = (value: string) => {
  const stringComparer = new StringComparer(value);
  const stringComparerTruncated = new StringComparer(stringComparer.truncateString());

  if (
    (!value.match(validCompanyRegex) || stringComparer.hasLengthBetween(2, 100)) ||
    stringComparerTruncated.hasLengthBetween(2, 100)
  )
    return 'Company should have between 2 and 100 alphanumeric characters';

  return '';
};

export const validatePasswordRegister = (value: string) => {
  const stringComparer = new StringComparer(value);

  if (stringComparer.hasLengthBetween(2, 20)) return 'Password should have between 2 and 20 characters';

  if (!value.match(noWhiteSpaces)) return 'Password should not have whitespaces';

  return '';
};
