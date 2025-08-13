import { addOrRemoveFavorite, listCamping, listFavorites, filterCamping  } from "@/api/camping";
import { create } from "zustand";

const campingStore = (set, get) => ({
  campings: [],
  favorites: [],
  center: null,
  actionListCamping: async (id) => {
    try {
      const res = await listCamping(id);

      set({ campings: res.data.result, center: res.data.center });
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

      
      const favorites = get().favorites;
      const updatedFavorite = favorites.filter((item) => {
        return item.landmark.id !== campingId;
      });
      set({ favorites: updatedFavorite });

      
      return { success: true, message: res.data.message };
      
    } catch (error) {
      
      const err = error?.response?.data?.message;
      return { success: false, message: err };
    }
  },
  actionListFavorites: async (token) => {
    try {
      const res = await listFavorites(token);
      set({ favorites: res.data.result });
    } catch (error) {
      console.log(error);
    }
  },
   actionFilter: async (category = "", search = "") => {
    try {
      const res = await filterCamping(category, search);
      
      set({ campings: res.data.result, center: res.data.center });
    } catch (error) {
      console.log(error);
    }
  },

});

const useCampingStore = create(campingStore);
export default useCampingStore;
