import { listCamping } from "@/api/camping";
import { create } from "zustand";

const campingStore = (set) => ({
    camping: [],
    actionListCamping: async () => {
        try {
            const res = await listCamping();
            set({ camping: res.data || [] });
        } catch (error) {
            console.error('Failed to fetch camping data:', error);
            set({ camping: [] });
        }
    }
});

const useCampingStore = create(campingStore);
export default useCampingStore