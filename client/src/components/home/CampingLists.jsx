
import CampingCard from "../card/CampingCard";
import useCampingStore from '@/store/camping-store';

const CampingLists = () => {
    const campings = useCampingStore((state) => state.camping);

    return (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
            {campings.map((item) => (
                <CampingCard key={item.id} camping={item} />
            ))}
        </section>
    );
};

export default CampingLists;