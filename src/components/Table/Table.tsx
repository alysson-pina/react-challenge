import React from "react";
import { StyledDiv, StyledTable, StyledTh, StyledTr } from "./styles";
import { SearchInput } from "../SearchInput";
import { TableRow } from "./TableRow";
import { useFilter } from "../../hooks/useFilter";

export interface TableProps<T extends { id: string }> {
  columns: readonly (keyof T)[];
  data: T[];
  icons?: Partial<Record<keyof T, React.ReactNode>>;
  searchWords: Partial<Record<keyof T, string>>;
  onSearch: (word: string, key: keyof T) => void;
  renderCustomContent?: (row: T, column: keyof T, formattedData: string | number) => React.ReactNode;
  onRowClick?: (row: T) => void;
}

export const Table = <T extends { id: string; }>({
  columns, data, icons, searchWords, onSearch, onRowClick, renderCustomContent
}: TableProps<T>) => {
  const filterableColumns = Object.keys(searchWords);
  const filteredData = useFilter(data, searchWords);

  return (
    <StyledTable>
      <thead>
        <StyledTr>
          {columns.map((column) => (
            <StyledTh key={String(column)} $numColumns={columns.length}>
              <StyledDiv>
                {String(column).toUpperCase()}
                {icons?.[column]}
              </StyledDiv>
              {filterableColumns.includes(String(column)) && <SearchInput filterKey={column} searchWord={String(searchWords[column])} onSearch={onSearch} />}
            </StyledTh>
          ))}
        </StyledTr>
      </thead>
      <tbody>
        {filteredData
          .map((row) => (
            <TableRow
              key={row.id}
              row={row}
              columns={columns}
              onRowClick={onRowClick}
              renderCustomContent={renderCustomContent}
            />
          )
        )}
      </tbody>
    </StyledTable>
  )
}
