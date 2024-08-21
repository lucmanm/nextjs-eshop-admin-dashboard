import { create } from "zustand";

type TStoreModalProps = {
    isOpen: boolean;
    toggle: () => void;
    headerData: {
        title: string
        description: string
    }
    setHeaderData: (data: { title: string; description: string }) => void,
}

export const useStoreModal = create<TStoreModalProps>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    headerData: {
        title: "",
        description: ""

    },
    setHeaderData: (data) => set({ headerData: data }),
}));