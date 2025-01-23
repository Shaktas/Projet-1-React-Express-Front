import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/api";

export function useUploadFile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => api.upload.uploadFile(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["avatar"]);
    },
  });
}
