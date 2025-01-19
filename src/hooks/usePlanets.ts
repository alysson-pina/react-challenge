import { useQuery } from "@tanstack/react-query"
import { PlanetsApiResponse } from "../types"

export const usePlanets = () => {
  return useQuery({
    queryKey: ['planets'],
    queryFn: async (): Promise<PlanetsApiResponse> => {
      const response = await fetch('https://localhost:3000/api/planets');
      
      return await response.json();
    },
  });
};
