import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import CategoryLists from "./CategoryLists";
import useCampingStore from '@/store/camping-store';
import { useUser } from "@clerk/clerk-react";


const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  const actionFilter = useCampingStore((state) => state.actionFilter);
  const [searchParams] = useSearchParams();
 

  const { user } = useUser();
  

  useEffect(() => {
    const id = user?.id ?? null;
    actionListCamping(id);
  }, [user?.id, actionListCamping]);

  const category = searchParams.get("category") || "";
  const search = searchParams.get("search") || "";

  useEffect(() => {
    actionFilter(category, search);
  }, [category, search, actionFilter]);

  return (
    <div>
      <CategoryLists />
      <MapHome />
      <CampingLists  />
    </div>
  );
};

export default CampingContainer;