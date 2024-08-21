import { create } from "zustand";

type THeaderData = {
    enTitle: string
    enDescription?: string
    arTitle: string
    arDescription?: string
}

type TStoreModalProps = {
    isOpen: boolean;
    toggle: () => void;
    headerData: THeaderData
    setHeaderData: (data: THeaderData) => void,
}

export const useStoreModal = create<TStoreModalProps>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    headerData: {
        enTitle: "",
        enDescription: "",
        arTitle: "",
        arDescription: ""
    },
    setHeaderData: (data) => set({ headerData: data }),
}));