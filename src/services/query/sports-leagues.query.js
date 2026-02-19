import { useQuery } from "@tanstack/react-query";
import { fetchSportLeagueBadge, fetchSportsleagues } from "../api/sports-leagues.api";

export const useSportsLeaguesQuery = () => {
  return useQuery({
    queryKey: ["sports-leagues"],
    queryFn: async () => {
      const response = await fetchSportsleagues();

      if (response.error) {
        throw new Error("Failed to fetch sports leagues");
      }

      return response.data;
    },
    staleTime: Infinity,
  });
};

export const useLeagueBadgeQuery = (leagueId) => {
  return useQuery({
    queryKey: ["league-badge", leagueId],
    queryFn: async () => {
      const response = await fetchSportLeagueBadge(leagueId);

      if (response.error) {
        throw new Error("Failed to fetch league badge");
      }

      return response.data;
    },
    enabled: !!leagueId,
    staleTime: Infinity,
  });
};
