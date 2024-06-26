import GenresList from "../constants/GenresList"
import MovieList from "./MovieList"
const GenreMovieList = () => {
  return (
    <>
        <div className="text-white">
            {GenresList.genere.map((item,index)=>{
                return index <= 4 &&(
                    <>
                        <div className="text-white">
                            <div className="p-8 px-8 md:p-16">
                                <h2 className="text-[20px] font-bold">{item.name}</h2>
                                <MovieList
                                    genreId = {item.id}
                                    index_= {index}
                                />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default GenreMovieList