import pixar from "../assets/images/pixar.png";
import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import starWars from "../assets/images/starwar.png";
import natGeo from "../assets/images/nationalG.png";

import pixarVideo from "../assets/videos/pixar.mp4";
import disneyVideo from "../assets/videos/disney.mp4";
import marvelVideo from "../assets/videos/marvel.mp4";
import natGeoVideo from "../assets/videos/national-geographic.mp4";
import starWarsVideo from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
  const productions = [
    {
      id: 1,
      image: disney,
      video: disneyVideo,
    },
    {
      id: 2,
      image: pixar,
      video: pixarVideo,
    },
    {
      id: 3,
      image: marvel,
      video: marvelVideo,
    },
    {
      id: 4,
      image: natGeo,
      video: natGeoVideo,
    },
    {
      id: 5,
      image: starWars,
      video: starWarsVideo,
    },
  ];

  return (
    <div>
      <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
        {productions.map((production) => {
          return (
            <div
              key={production.id}
              className=" border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-700">
              <video
                src={production.video}
                autoPlay
                loop
                playsInline
                className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 w-full"
              />

              <img
                src={production.image}
                alt="production-house-image"
                className="w-full z-[1] "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductionHouse;