import { useQuery, useQueryClient, useMutation } from "react-query";

export const useApiGet = <T,>(
  key: unknown,
  fn: () => Promise<T>,
  options?: unknown
) => {
  return useQuery<T>({
    queryKey: key,
    queryFn: fn,
    ...(options as any),
  });
};

export const useApiSend = <T,>(
  fn: () => Promise<T>,
  success?: (data: T) => void,
  error?: (err: unknown) => void,
  invalidateKey?: string[],
  options?: unknown
) => {
  const queryClient = useQueryClient();

  return useMutation<T>({
    mutationFn: fn,
    onSuccess: (data) => {
      if (invalidateKey) {
        invalidateKey.forEach((key) => {
          queryClient.invalidateQueries(key);
        });
      }
      if (success) {
        success(data);
      }
    },
    onError: error,
    retry: 2,
    ...(options as any),
  });
};
