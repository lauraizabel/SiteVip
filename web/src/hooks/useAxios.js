import api from "../services/api";
import useSWR from "swr";

export function useAxios(url, options) {
  const { data, error } = useSWR(url, async (url, options) => {
    const response = await api.get(url, options);
    console.log(response.data);
    return response.data;
  });
  return { data, error };
}
