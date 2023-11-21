import useData, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    // not working, initialData: {count: platforms.length, results: latforms}
  });

export default usePlatforms;
