import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";

export function useUserData() {
  const id = sessionStorage.getItem("userId");

  const { data } = useQuery({
    queryKey: ["userData", id],
    queryFn: () => api.user.getOneUser(id),
    enabled: !!id,
  });

  const userData = data?.data;

  return userData;
}
