import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ISearchState {
  hasHydrated: boolean;
  loading: boolean;
  keyword: string;

  setHasHydrated: (payload: boolean) => void;
  setLoading: (payload: boolean) => void;
  setKeyword: (payload: string) => void;
}

const useSearchStore = create<ISearchState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      keyword: "",

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),
      setLoading: (payload: boolean) => set({ loading: payload }),
      setKeyword: (payload: string) => set({ keyword: payload })
    }),
    {
      name: "galaxyz-search",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useSearchStore;
