import { StyledDiv } from "./styles";
import { useRealTimeExchangeRate } from "../../hooks/useRealTimeExchangeRate";
import { formatNumber } from "../../utils/numbers";
import { Tooltip } from "../Tooltip";
import { TransactionType } from "../../types";


export const TransactionItemContentWithTooltip = ({ transaction, children }: {
  transaction: TransactionType,
  children: React.ReactNode,
}) => {
    const { rate: rateStr } = useRealTimeExchangeRate()
    const rate = Number(rateStr);
    const otherCurrency = transaction.currency === 'GCS' ? 'ICS' : 'GCS';

    const TooltipContent = (
      <>
        <StyledDiv>{formatNumber(transaction.amount)} {transaction.currency}</StyledDiv>
        <StyledDiv>{transaction.currency === 'GCS' ? formatNumber(transaction.amount / rate) : formatNumber(transaction.amount * rate)} {otherCurrency}</StyledDiv>
      </>
    )

    return (
      <Tooltip content={TooltipContent}>{children}</Tooltip>
    );
}


export const TransactionItemContent = ({ transaction, column, children }: {
  transaction: TransactionType,
  column: keyof TransactionType,
  children: React.ReactNode,
}) => {
    if (column !== 'amount' ) {
      return children;
    } 
  
    return (
      <TransactionItemContentWithTooltip transaction={transaction}>{children}</TransactionItemContentWithTooltip>
    );
}
