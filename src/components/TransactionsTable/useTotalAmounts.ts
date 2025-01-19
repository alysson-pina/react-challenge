import { useMemo } from "react";
import { TransactionType } from "../../types";

export const useTotalAmounts = (data: TransactionType[]) => {
  return useMemo(() => {
    let totalInGCS = 0;
    let totalInICS = 0;

    data.forEach((transaction) => {
      if (transaction.currency === "GCS") {
        totalInGCS += Math.abs(transaction.amount);
      } else if (transaction.currency === "ICS") {
        totalInICS += Math.abs(transaction.amount);
      }
    });

    return {
      totalInGCS,
      totalInICS,
    };
  }, [data]);
};
