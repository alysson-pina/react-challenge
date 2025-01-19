export const filterBySearchWord = (value: string, searchWord: string) => 
  value.toLowerCase().includes(searchWord.toLowerCase());
