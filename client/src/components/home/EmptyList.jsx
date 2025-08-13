import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import useCampingStore from "@/store/camping-store";
import { useUser } from "@clerk/clerk-react";

const EmptyList = () => {
  const navigate = useNavigate();
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  const { user } = useUser();

  const handleClearFilter = () => {
    const id = user?.id ?? null;
    actionListCamping(id);
   
    navigate("/");
  };

  return (
    <div className="mt-4 flex flex-col items-center text-center gap-4">
      <h1 className="text-2xl font-semibold">No Campings Available</h1>
      <Button onClick={handleClearFilter}>Clear Filter</Button>
    </div>
  );
};
export default EmptyList;