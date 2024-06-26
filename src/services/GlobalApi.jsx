import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const API_KEY = "4e4c05c4d67bb96cd020a0e8eb13ef2f"

// https://api.themoviedb.org/3/movie/157336?api_key=4e4c05c4d67bb96cd020a0e8eb13ef2f
// https://api.themoviedb.org/3/trending/157336?api_key=4e4c05c4d67bb96cd020a0e8eb13ef2f

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key=" + API_KEY);

export default{
    getTrendingVideos
}