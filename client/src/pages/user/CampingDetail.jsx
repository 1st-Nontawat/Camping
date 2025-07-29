import { useParams } from "react-router-dom";
import { readCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/campings/Breadcrums";

const CampingDetail = () => {
    const [camping, setCamping] = useState(null);
    const { id } = useParams();

    const fetchCampingDetail = async (id) => {
        try {
            const res = await readCamping(id);
            setCamping(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCampingDetail(id);
    }, [id]);

    if (!camping) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Breadcrumbs name={camping.title} />
            {/* ...other detail... */}
        </div>
    );
};

export default CampingDetail;