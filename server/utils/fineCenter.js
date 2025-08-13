const turf = require("@turf/turf");

exports.findCenter = (data) => {
  if (data.length === 0) {
    return null;
  }

  const feature = data.map(item => {
    return turf.point([item.longitude, item.latitude]);
  });

    const featureCollection = turf.featureCollection(feature);
    const center = turf.center(featureCollection);

   const latitude = center.geometry.coordinates[1];
   const longitude = center.geometry.coordinates[0];

   
    return [latitude, longitude];


};
