import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { useContext } from "react";
import { AuthenticateContext } from "../../Context/AuthenticateContext";

export function useUserData() {
  const { id } = useContext(AuthenticateContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["userData", id],
    queryFn: () => api.user.getOneUser(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return { data };
}
