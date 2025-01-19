import { formatData } from "../../utils/strings";
import { StyledTd, StyledTr } from "./styles";

export const TableRow = <T extends { id: string; }>({
  row,
  columns,
  onRowClick,
  renderCustomContent,
}: {
  row: T;
  columns: readonly (keyof T)[];
  onRowClick?: (row: T) => void;
  renderCustomContent?: (row: T, column: keyof T, formattedData: string | number) => React.ReactNode;
}) => {
  return (
    <StyledTr key={row.id} onClick={() => onRowClick?.(row)}>
      {columns.map((column) => {
        const formattedData = formatData(row[column] as string | string[]);

        return (
          <StyledTd key={`${row.id}-${String(column)}`} $numColumns={columns.length}>
            {renderCustomContent ? renderCustomContent(row, column, formattedData) : formattedData}
          </StyledTd>
        );
      })}
    </StyledTr>
  );
};
