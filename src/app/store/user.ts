import { create } from 'zustand';

const useUserStore = create<{
  user: {
    promotion: Date | null;
  };
}>((set) => ({
  user: null,
  setUser: (user:any) => set({ user }),
}));

export default useUserStore;