/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HorizontalMovieCard from "./HorizontalMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId)
      .then((resp) => {
        setMovieList(resp?.data.results);
        console.log(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"} `}
      />
      <div
        ref={elementRef}
        className="text-white flex gap-8 overflow-x-auto scrollbar-none pt-5 px-3 pb-5 scroll-smooth">
        {movieList.map((movie, index) => {
          return (
            <>
              {index_ % 3 == 0 ? (
                <HorizontalMovieCard  movie={movie}/>
              ) : (
                <MovieCard key={index} movie={movie} />
              )}
            </>
          );
        })}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
};

export default MovieList;
