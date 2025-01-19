import { formatNumber, isNumeric } from "./numbers";

export const formatString = (str: string): string | number =>
  isNumeric(str) ? formatNumber(Number(str)) : str;

export const formatData = (value: number | string | string[]): string | number => {
  if (typeof value === 'number' ) {
    return formatNumber(value);
  }

  if (typeof value === 'string'&& isNumeric(value)) {
    return formatNumber(Number(value));
  }

  if (Array.isArray(value)) { // handle string[] case
    return value.join(', ');
  }

  return value;
}
