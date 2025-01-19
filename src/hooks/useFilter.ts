export const useFilter = <T>(data: T[], searchWords: Partial<Record<keyof T, string>>) => {
  const filterKeys = Object.keys(searchWords) as Array<keyof T>;

  return data.filter((row) => {
    return filterKeys.every((filterKey) => {
      const searchWord = searchWords[filterKey];

      if (!searchWord) return true;

      return String(row[filterKey]).toLowerCase().includes(searchWord.toLowerCase());
    })
  });
}
