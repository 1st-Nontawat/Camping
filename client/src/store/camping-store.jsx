import { listCamping } from "@/api/camping";
import { create } from "zustand";

const campingStore = (set) => ({
    campings: [],
    actionListCamping: async (id) => {
        try {
            const res = await listCamping(id);

            set({ campings: res.data.result || [] });
        } catch (error) {
            console.log(error)
        }
    }
});

const useCampingStore = create(campingStore);
export default useCampingStore