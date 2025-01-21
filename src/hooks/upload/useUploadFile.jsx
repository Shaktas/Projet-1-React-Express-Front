import { useMutation } from "@tanstack/react-query";
import { api } from "../../api/api";

export function useUploadFile() {
  return useMutation({
    mutationFn: ({ data }) => api.upload.uploadFile({ data }),
  });
}
