import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/movieCard";
import girl from "../assets/girl.jpg";

const MovieDetail = ()=>{
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    const [commedy, setCommedy] = useState([]);

    useEffect(()=>{
        try{
            axios.get(`https://www.omdbapi.com/?s=action&apikey=5707c2d2`).then((res)=>{
                if(res.data.Search){
                    setCommedy(res.data.Search);
                }
            })
        }catch(err){console.log(err)}
    }, [])

    useEffect(()=>{
        try{
            axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=5707c2d2`).then((res)=>{
                if(res.data){
                    setMovie(res.data);
                }
            })
        }catch(err){console.log(err)}

    }, [movieId])

    return (
        <div className="text-white font-poppins">
            <div className="bg-snow-1 py-[20px] bg-cover bg-no-repeat justify-center content-center items-center w-full">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="max-w-[900px]">
                        <a href="/movies">
                            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                Back
                            </button>
                        </a>
                        <h2 className="text-2xl">{movie?.Title}</h2>
                        <p className="text-base font-light text-gray-300">{movie?.Year}</p>
                        <h3 className="text-xl pt-2">Overview</h3>
                        <p className="text-base font-light text-gray-300">{movie?.Plot}</p>
                    </div>
                    <div className="relative">
                        <div className="rounded-full w-10 h-10 bg-blue-500 font-bold flex items-center justify-center absolute top-2 right-2">
                            <p>{movie?.imdbRating}</p>
                        </div>
                        <img className="w-full h-[300px] object-cover rounded-xl" src={movie?.Poster} alt="Card Image"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold py-10">Top Billed Cast</h3>
                <div className="flex flex-row flex-wrap gap-5">
                   <div className="">
                        <img className="h-[100px] w-[100px] rounded-full object-cover" src={girl}/>
                        <h3 className="text-base font-bold">Emma Watson</h3>
                        <p className="text-sm font-light text-gray-300">female 19-09-1979</p>
                   </div>
                   <div className="p-0 m-0">
                        <img className="h-[100px] w-[100px] rounded-full object-cover" src={girl}/>
                        <h3 className="text-base font-bold">Emma Watson</h3>
                        <p className="text-sm font-light text-gray-300">female 19-09-1979</p>
                   </div>
                   <div className="p-0 m-0">
                        <img className="h-[100px] w-[100px] rounded-full object-cover" src={girl}/>
                        <h3 className="text-base font-bold">Emma Watson</h3>
                        <p className="text-sm font-light text-gray-300">female 19-09-1979</p>
                   </div>
                   <div className="p-0 m-0">
                        <img className="h-[100px] w-[100px] rounded-full object-cover" src={girl}/>
                        <h3 className="text-base font-bold">Emma Watson</h3>
                        <p className="text-sm font-light text-gray-300">female 19-09-1979</p>
                   </div>
                   <div className="p-0 m-0">
                        <img className="h-[100px] w-[100px] rounded-full object-cover" src={girl}/>
                        <h3 className="text-base font-bold">Emma Watson</h3>
                        <p className="text-sm font-light text-gray-300">female 19-09-1979</p>
                   </div>
                   <div className="p-0 m-0">
                        <img className="h-[100px] w-[100px] rounded-full object-cover" src={girl}/>
                        <h3 className="text-base font-bold">Emma Watson</h3>
                        <p className="text-sm font-light text-gray-300">female 19-09-1979</p>
                   </div>
                   <div className="p-0 m-0">
                        <img className="h-[100px] w-[100px] rounded-full object-cover" src={girl}/>
                        <h3 className="text-base font-bold">Emma Watson</h3>
                        <p className="text-sm font-light text-gray-300">female 19-09-1979</p>
                   </div>
                </div>
            </div>

            <div className="container mx-auto">
                <h3 className="text-3xl font-bold py-10">Action</h3>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
                    {commedy.length > 0 ? commedy.map((e,i)=>
                        <MovieCard key={i} title={e.Title} year={e.Year} img={e.Poster} id={e.imdbID}/>
                    ): ""}
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;