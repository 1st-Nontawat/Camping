import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      if (setValue) {
        setValue("latitude", e.latlng.lat);
        setValue("longitude", e.latlng.lng);
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Mainmap = ({ register, setValue, Location }) => {
  const [position, setPosition] = useState(null);
  const DEFAULT_LOCATION = [13, 100];

  const center = Location && Array.isArray(Location) ? Location : DEFAULT_LOCATION;
  const markerPosition =
    Location && Array.isArray(Location)
      ? { lat: Location[0], lng: Location[1] }
      : { lat: DEFAULT_LOCATION[0], lng: DEFAULT_LOCATION[1] };

  console.log("Location:", Location);

  return (
    <div>
      {register && (
        <>
          <input hidden {...register("latitude")} />
          <input hidden {...register("longitude")} />
        </>
      )}

      <h1 className="font-seibold mt-4">Where are you?</h1>

      {position && (
        <p className="text-sm text-gray-600">
          Coordinates : {position.lat.toFixed(6)} , {position.lng.toFixed(6)}
        </p>
      )}

      <MapContainer
        className="h-[400px] rounded-md"
        center={center}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={markerPosition}></Marker>

        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};

export default Mainmap;