import { useQuery } from "@tanstack/react-query"
import { TransactionsApiResponse, UsersApiResponse } from "../types"


export const useTransactions = () => {
  return useQuery({
    queryKey: ['all-transactions'],
    queryFn: async (): Promise<UsersApiResponse> => {
      const response = await fetch('https://localhost:3000/api/transactions');
      return await response.json();
    },
  });
};

export const useUsersTransactionsByPlanet = (planetId: string) => {
  // Fetch users by planet
  const { data: usersData } = useQuery({
    queryKey: ['users', planetId],
    queryFn: async (): Promise<UsersApiResponse> => {
      const response = await fetch(`https://localhost:3000/api/users/planet/${planetId}`);
      return await response.json();
    },
    enabled: !!planetId, // run only if planetId is provided
  });

  // Extract user IDs and transform them in format ready for the next endpoint
  const userIds = usersData?.users.map((user) => user.id) || [];
  const userIdsString = `["${userIds.join('", "')}"]`; // hack that I needed to take in order to format ids as expected by the API

  // Fetch transactions for the users, dependent on userIds
  return useQuery({
    queryKey: ['transactions', userIds],
    queryFn: async (): Promise<TransactionsApiResponse> => {
      const response = await fetch(
        `https://localhost:3000/api/transactions/users/${userIdsString}`
      );

      return  await response.json();
    },
    enabled: userIds.length > 0, // run only userIds are available
  });
};
