import { useQuery } from "@tanstack/react-query"
import { UsersApiResponse } from "../types"

export const useUsersByPlanet = (planetId: string) => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<UsersApiResponse> => {
      const response = await fetch(`https://localhost:3000/api/users/planet/${planetId}`);
      
      return await response.json();
    },
  });
}
