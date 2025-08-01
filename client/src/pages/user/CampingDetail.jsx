import { useParams } from "react-router-dom";
import { readCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/campings/Breadcrums";
import ImageContainer from "../../components/campings/ImageContainer";
import Description from "../../components/campings/Description";
import Mainmap from "../../components/map/Mainmap";
import BookingContainer from "../../booking/BookingContainer";

const CampingDetail = () => {
  const [camping, setCamping] = useState(null);
  const { id } = useParams();

  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id);
      console.log(res.data);
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
      {/* Header*/}
      <header className="flex items-center justify-between mt-2">
        <h1 className="text-4xl font-bold">{camping.title}</h1>
        <div className="flex gap-2">
          <p>Share</p>
          <p>Favorite</p>
        </div>
      </header>
      {/* Image  */}
      <ImageContainer image={camping.secure_url} name={camping.name} />

      {/* Description & Map */}
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <Description text={camping.description} />
          {camping.latitude && <Mainmap Location={[camping.latitude, camping.longitude]} />}
        </div>
        {/* Calender */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingContainer
            campingId={camping.id}
            price={camping.price}
            bookings={[]}
          />
        </div>
      </section>
    </div>
  );
};

export default CampingDetail;
