import { StyledInput } from "./styles";

interface SearchInputProps<T> {
  onSearch: (word: string, filterKey: keyof T) => void;
  filterKey: keyof T;
  searchWord: string;
}

export const SearchInput = <T,>({ onSearch, searchWord, filterKey }: SearchInputProps<T>) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(evt.target.value, filterKey);
  };

  return (
    <StyledInput
      type="text"
      value={searchWord}
      aria-label="Search"
      role='searchbox'
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};
