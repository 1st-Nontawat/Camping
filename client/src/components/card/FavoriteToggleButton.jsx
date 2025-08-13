import useCampingStore from "@/store/camping-store";
import { CardSubmitButtons } from "./CardButtons";
import { useForm } from "react-hook-form";
import { useAuth } from "@clerk/clerk-react";
import {  createNofity } from "@/utils/createAlert";

const FavoriteToggleButton = ({ campingId, isFavorite }) => {
 
  const { getToken } = useAuth();
  
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
 
  const actionAddorRemoveFavorite = useCampingStore(
    (state) => state.actionAddorRemoveFavorite
  );
 
  const hdlSumbit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();
    
    const res = await actionAddorRemoveFavorite(token, {
      campingId,
      isFavorite,
    });
    if (res.success) {
      createNofity("success", res.message);
    } else {
      createNofity("error", res.message);
    }
    
  };

  
  return (
    <form onSubmit={handleSubmit(hdlSumbit)}>
      <CardSubmitButtons isPending={isSubmitting} isFavorite={isFavorite} />
    </form>
  );
};
export default FavoriteToggleButton;