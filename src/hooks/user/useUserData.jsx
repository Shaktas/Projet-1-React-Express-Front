import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, pseudo, email }) =>
      api.user.updateUser(id, pseudo, email),
    onSuccess: (data, variables) => {
      // Invalidate user data
      queryClient.invalidateQueries(["user", variables.id]);

      // Optimistic update
      queryClient.setQueryData(["user", variables.id], (oldData) => ({
        ...oldData,
        userPseudo: variables.pseudo,
        userEmail: variables.email,
      }));
    },
  });
}

export function useGetAvatar() {
  const { data } = useQuery({
    queryKey: ["avatar"],
    queryFn: () => api.avatar.getAvatar(),
  });

  return data;
}
