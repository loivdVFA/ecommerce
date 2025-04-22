import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/todo";


export const useTodosQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    staleTime: 10000, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  });
};
