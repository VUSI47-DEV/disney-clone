import pixar from '../assets/images/pixar.png'
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import starWars from '../assets/images/starwar.png'
import natGeo from '../assets/images/nationalG.png'

import pixarVideo from '../assets/videos/pixar.mp4'
import disneyVideo from '../assets/videos/disney.mp4'
import marvelVideo from '../assets/videos/marvel.mp4'
import natGeoVideo from '../assets/videos/national-geographic.mp4'
import starWarsVideo from '../assets/videos/star-wars.mp4'

const ProductionHouse = () => {

    const productions = [
        {
            id:1,
            image:disney,
            video:disneyVideo,
        },
        {
            id:2,
            image:pixar,
            video:pixarVideo,
        },
        {
            id:3,
            image:marvel,
            video:marvelVideo,
        },
        {
            id:4,
            image:natGeo,
            video:natGeoVideo,
        },
        {
            id:5,
            image:starWars,
            video:starWarsVideo,
        },
    ]

  return (
    <div>
        <div className="">

        </div>
    </div>
  )
}

export default ProductionHouse