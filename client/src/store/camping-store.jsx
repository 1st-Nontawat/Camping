import { addOrRemoveFavorite, listCamping } from "@/api/camping";
import { create } from "zustand";

const campingStore = (set, get) => ({
  campings: [],
  favorites: [],
  actionListCamping: async (id) => {
    try {
      const res = await listCamping(id);

      set({ campings: res.data.result || [] });
    } catch (error) {
      console.log(error);
    }
  },
  
  actionAddorRemoveFavorite: async (token, data) => {
    try {
      
      const res = await addOrRemoveFavorite(token, data);
      const camping = get().campings;
     
      const { campingId, isFavorite } = data;

      const updatedCamping = camping.map((item) => {
        return item.id === campingId
          ? { ...item, isFavorite: !isFavorite }
          : item;
      });

      
      set({ campings: updatedCamping });

      // Update favorites
      const favorites = get().favorites;
      const updatedFavorite = favorites.filter((item) => {
        return item.landmark.id !== campingId;
      });
      set({ favorites: updatedFavorite });

      // console.log(res.data.message);
      return { success: true, message: res.data.message };
      // logic
    } catch (error) {
      // console.log(error?.response?.data?.message);
      const err = error?.response?.data?.message;
      return { success: false, message: err };
    }
  },

});

const useCampingStore = create(campingStore);
export default useCampingStore;
