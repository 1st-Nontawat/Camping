
import { Heart, RotateCw } from "lucide-react";

export const CardSubmitButtons = ( { isPending, isFavorite }) => {
  console.log(isPending);

  return (
    <button>
      { 
        isPending
        ? <RotateCw className= "animate-spin "/>
        : isFavorite
        ? <Heart
          className="hover:scale-110 hover:duration-300"
          fill="red"
          size={34}
          stroke="white"
        />
        : <Heart
          className="hover:scale-110 hover:duration-300"
          fill="black"
          size={34}
          stroke="white"
        />

      } 
    </button>

  );
};


export const CardSignInButtons = () => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Sign In to Favorite
    </button>
  );
};