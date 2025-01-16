import { useMutation, useQuery } from "@tanstack/react-query";
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

export { useGetVaultsByUser, useCreateVault };
