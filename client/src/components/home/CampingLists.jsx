import { listCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import CampingCard from "../card/CampingCard";

const CampingLists = () => {
    const [campings, setCampings] = useState([]);

    const fetchData = async () => {
        try {
            const res = await listCamping();

            setCampings(res.data || []);
        } catch (error) {
            console.error("Error fetching camping lists:", error);
            setCampings([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    
    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
            {campings.map((item) => (
                <CampingCard key={item.id} camping={item} />
            ))}
        </section>
    );
};

export default CampingLists;