import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "../../api/api";

const useGetVaultsByUser = (id) => {
  const { data, error } = useQuery({
    queryKey: ["VaultsByUser", id],
    queryFn: () => api.user.getVaultsbyUser(id),
    enabled: !!id,
  });

  return {
    vaults: data?.data,
    error,
  };
};

const useCardsQueries = (vaults) => {
  let cardsQueries = useQueries({
    queries: Object.entries(vaults || {}).map((vault) => ({
      queryKey: ["VaultCards", vault[0]],
      queryFn: () => api.vault.getCardsbyVault(parseInt(vault[0])),
      enabled: !!vault[0],
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });

  return cardsQueries;
};

function useUpdateVault() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, id }) =>
      api.vault.updateVault(id, { vaultName: title }),
    onSuccess: (_, variables) => {
      // Invalidate user data : force the refetch of data
      queryClient.invalidateQueries(["vault", variables.id]);

      // Optimistic update : update the data in the cache directly
      queryClient.setQueryData(["vault", variables.id], (oldData) => ({
        ...oldData,
        vaultName: variables.title,
      }));
    },
  });
}
function useUpdateCardByVault() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }) =>
      api.vault.updateCardByVault(data.vaultId, data.cardId, { ...data }),
    // onSuccess: (_, variables) => {
    //   // Invalidate user data : force the refetch of data
    //   // queryClient.invalidateQueries(["card", variables.id]);

    //   // Optimistic update : update the data in the cache directly
    //   // queryClient.setQueryData(["card", variables.id], (oldData) => ({
    //   //   ...oldData,
    //   //   userPseudo: variables.pseudo,
    //   //   userEmail: variables.email,
    //   // }));
    // },
  });
}

export {
  useGetVaultsByUser,
  useCardsQueries,
  useUpdateVault,
  useUpdateCardByVault,
};
