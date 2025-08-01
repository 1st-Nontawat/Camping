import { LayersControl, TileLayer, Marker, Popup, LayerGroup, Tooltip } from "react-leaflet";
import useCampingStore from '@/store/camping-store';

const Layers = () => {
    const campings = useCampingStore((state) => state.camping);
       
  
    

  return (
    <LayersControl>
      <LayersControl.BaseLayer checked name="OSM">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer checked name="Satellite">
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>

      {/* { Overlay for Landmarks } */}
      <LayersControl.Overlay name="Landmark">
        <LayerGroup>
        {campings.map((item) => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>
              {item.title}
              <br />
              {item.description}
              
            </Popup>
            <Tooltip>
                {item.title}
            </Tooltip>
          </Marker>
        ))}
        </LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};
export default Layers;
