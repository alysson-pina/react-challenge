export const formatNumber = 
  (num: number) => num.toLocaleString(
    undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }
  );

export const isNumeric = (str: string): boolean =>
  str.trim() !== '' && String(parseFloat(str)) === str;
