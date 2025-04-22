import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo } from "../../api/todo";

export const usePostTodo = () => {
  const queryClient = useQueryClient();
    console.log(queryClient);
    
  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: () => { },
    onSettled: () => {
      // dù thành công hay thất bại thì cũng sẽ gọi lại query này
    },
  });
};
