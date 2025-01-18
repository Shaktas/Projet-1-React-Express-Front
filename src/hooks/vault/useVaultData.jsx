import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";

const useCreateVault = (vaultName) => {
  const mutation = useMutation({
    mutationFn: () => {
      return api.vault.createVault(vaultName);
    },
    onSuccess: (data) => {
      // Handle successful vault creation
      console.log("Vault created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating vault:", error);
    },
  });
  console.log("mutation:", mutation);

  return mutation;
};

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

export { useGetVaultsByUser, useCreateVault, useCardsQueries };
