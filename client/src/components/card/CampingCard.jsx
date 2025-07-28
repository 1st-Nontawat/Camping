const CampingCard = ({ camping }) => {
   return (
    <article className="hover:scale-105 hover:duration-300 shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="h-64">
        <img
          src={camping.secure_url}
          alt={camping.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-1">{camping.title}</h3>
          <p className="text-gray-600 text-sm">
            {camping.description.substring(0, 60)}
            {camping.description.length > 60 && "..."}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm">
          <p className="font-semibold text-green-700">฿{camping.price}</p>
          <p className="text-gray-500">
            {camping.latitude.toFixed(4)}, {camping.longitude.toFixed(4)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CampingCard;