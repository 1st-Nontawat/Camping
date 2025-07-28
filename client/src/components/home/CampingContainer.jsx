import { useEffect } from "react";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import useCampingStore from '@/store/camping-store';

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  

  useEffect(() => {
    actionListCamping();
  }, [actionListCamping]);

  return (
    <div>
      <MapHome />
      <CampingLists  />
    </div>
  );
};

export default CampingContainer;