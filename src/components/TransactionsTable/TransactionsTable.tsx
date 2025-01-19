
import React, { useMemo, useState } from "react";
import {  TransactionType } from "../../types"
import { Table } from "../Table/Table";
import { StyledDiv, Wrapper } from "./styles";
import { useRealTimeExchangeRate } from "../../hooks/useRealTimeExchangeRate";
import { formatNumber } from "../../utils/numbers";
import { TransactionItemContent } from "./TransactionItemContent";
import { sumTotalAmount } from "../../utils/calculations";
import { useTotalAmounts } from "./useTotalAmounts";
import { Info } from "../../icons/Info";
import { Tooltip } from "../Tooltip";
import { Search } from "../../icons/Search";

interface Props {
  data: TransactionType[];
}

const COLUMNS = ['currency', 'amount', 'date', 'status'] as const;
const ICONS = {
  'currency': <Search />,
  'amount': <Tooltip content={<StyledDiv>Hover over amount values</StyledDiv>}><Info /></Tooltip>
};

export const TransactionsTable = ({ data } : Props) => {
  const [searchWordMap, setSearchWordMap] = useState({ currency: '' });
  const { rate } = useRealTimeExchangeRate();
  
  const { totalInGCS, totalInICS } = useTotalAmounts(data);

  const totalAmounts = useMemo(() => 
    sumTotalAmount(totalInGCS, totalInICS, rate),
    [totalInGCS, totalInICS, rate]
  );

  const renderCustomContent = (row: TransactionType, column: keyof TransactionType, value: number | string | string[]) => 
    <TransactionItemContent transaction={row} column={column}>{value}</TransactionItemContent>;

  const handleSearch = (word: string, key: keyof TransactionType) => setSearchWordMap((prev) => ( { ...prev, [key]: word } ));

  return (
    <Wrapper>
      { 
        totalAmounts.map(({ currency, total }) => (
          <StyledDiv key={currency}>
            Total Amount: {formatNumber(total)} {currency}
          </StyledDiv>
        )) 
      }
      <Table columns={COLUMNS} icons={ICONS} data={data} renderCustomContent={renderCustomContent} searchWords={searchWordMap} onSearch={handleSearch}  />
    </Wrapper>
  );
}
