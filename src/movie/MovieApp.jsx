import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import MovieSearchItem from "../components/movieSearchItem";
import axios from "axios";

const MovieApp = ()=>{
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(()=>{
        try{
            axios.get(`https://www.omdbapi.com/?s=action&apikey=5707c2d2`).then((res)=>{
                if(res.data.Search){
                    setPopular(res.data.Search);
                }
            })
        }catch(err){console.log(err)}

        try{
            axios.get(`https://www.omdbapi.com/?s=comedy&apikey=5707c2d2`).then((res)=>{
                if(res.data.Search){
                    setTopRated(res.data.Search);
                }
            })
        }catch(err){console.log(err)}
    }, [])

    const handleSearch = async (text)=>{
        if(!text){
            setSearch(text);
            setSearchResults([]);
            return;
        }
        setSearch(text);
        setTimeout(() => {
            try{
                axios.get(`https://www.omdbapi.com/?s=${text}&apikey=5707c2d2`).then((res)=>{
                    if(res.data.Search){
                        console.log(res.data.Search)
                        setSearchResults(res.data.Search);
                    }
                })
            }catch(err){console.log(err)}
        }, 1000);
    }

    return (
        <div className="text-white font-poppins">
            <div className="bg-snow py-[20px] bg-cover bg-no-repeat justify-center content-center items-center w-full">
                <div className="w-[780px] relative mx-auto">
                    <input value={search} onChange={(e)=>handleSearch(e.target.value)} type="text" name="search" className="mx-auto py-3 px-10 block w-full text-white border-primary rounded-lg text-sm bg-primary opacity-80 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search Movie"/>
                    <div style={searchResults.length > 0 ? {display: "block"} : {display: "none"}} className="absolute w-full max-h-[400px] bg-white rounded-md top-[60px] z-10 overflow-auto">
                        {search && searchResults.length > 0 ? searchResults.map((e, i)=>
                            <MovieSearchItem key={i} title={e.Title} year={e.Year} id={e.imdbID}/>
                        ): <p className="text-center">No search results</p>}
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold py-5">Popular</h3>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
                    {popular.length > 0 ? popular.map((e,i)=>
                        <MovieCard key={i} title={e.Title} year={e.Year} img={e.Poster} id={e.imdbID}/>
                    ): ""}
                </div>
            </div>
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold py-10">Top Rated</h3>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
                    {topRated.length > 0 ? topRated.map((e,i)=>
                        <MovieCard key={i} title={e.Title} year={e.Year} img={e.Poster} id={e.imdbID}/>
                    ): ""}
                </div>
            </div>
        </div>
    )
}

export default MovieApp;