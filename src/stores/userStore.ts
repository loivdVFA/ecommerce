import { create } from 'zustand'

type useStoreState = {
    bears: number
};
type useStoreActions = {
    increasePopulation: () => void;
};

type userStore = useStoreState & useStoreActions;

const useUserStore = create<userStore>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}))
export default useUserStore;