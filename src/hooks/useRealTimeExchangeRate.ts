import { useEffect, useState } from "react";
import { ExchangeRate } from "../types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const POLLING_INTERVAL = 5000

export function useRealTimeExchangeRate() {
  const [rate, setRate] = useState<string | undefined>(undefined); // latest rate received
  const queryClient = useQueryClient();

  const { data: queryData, refetch } = useQuery({
    queryKey: ["exchangeRate"],
    queryFn: async (): Promise<ExchangeRate> => {
      const response = await fetch("https://localhost:3000/api/exchange-rate");
      return await response.json();
    },
  });

  useEffect(() => {
    if (queryData) {
      setRate(queryData.rate);
    }
  }, [queryData]);

  useEffect(() => {
    const refetchInterval = window.setInterval(() => {
      refetch();
    }, POLLING_INTERVAL);

    return () => {
      clearInterval(refetchInterval);
    };
  }, [queryClient]);

  return { rate };
};
