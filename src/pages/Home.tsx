import { usePostTodo } from "../hooks/mutations/usePostTodo";
import { useTodosQuery } from "../hooks/queries/useTodoQuery";
import useUserStore from "../stores/userStore"

const Home = () => {
  const bears = useUserStore((state) => state.bears);
  const increasePopulation = useUserStore((state) => state.increasePopulation);
  const { isLoading } = useTodosQuery();
  const postTodo = usePostTodo();
  // useEffect(() => {
  //   console.log("env",import.meta.env.VITE_URL_BE); 
  // })

  if(isLoading) return <div>Loading...</div>;
  
  return (
    <div className="text-[red] flex flex-col">
        Hello Home { bears} LoiVD Dt smarts update  5/3
        <button onClick={increasePopulation}>Click</button>
        <button onClick={() => postTodo.mutate({ title: "Hello" })}>Post Todo</button>
    </div>
  )
}

export default Home