import { useEffect, useState } from "react";
import BookSearchItem from "../components/bookSearchItem";
import axios from "axios";
import BookCard from "../components/bookCard";

const BookApp = ()=>{
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [popular, setPopular] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(()=>{
        try{
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=cooking`).then((res)=>{
                if(res.data.items){
                    setPopular(res.data.items);
                }
            })
        }catch(err){console.log(err)}

        try{
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=self+help`).then((res)=>{
                if(res.data.items){
                    setRandom(res.data.items);
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
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`).then((res)=>{
                    if(res.data.items){
                        console.log(res.data.items);
                        setSearchResults(res.data.items);
                    }
                })
            }catch(err){console.log(err)}
        }, 1000);
    }

    return (
        <div className="text-white font-poppins">
            <div className="bg-books py-[20px] bg-cover bg-no-repeat justify-center content-center items-center w-full">
                <div className="w-[780px] relative mx-auto">
                    <input value={search} onChange={(e)=>handleSearch(e.target.value)} type="text" name="search" className="mx-auto py-3 px-10 block w-full text-white border-primary rounded-lg text-sm bg-primary opacity-80 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search Books by Title, Genre or Author"/>
                    <div style={searchResults.length > 0 ? {display: "block"} : {display: "none"}} className="absolute w-full max-h-[400px] bg-white rounded-md top-[60px] z-10 overflow-auto">
                        {search && searchResults.length > 0 ? searchResults.map((e, i)=>
                            <BookSearchItem key={i} title={e.volumeInfo.title} year={e.volumeInfo.publishedDate} id={e.id}/>
                        ): <p className="text-center">No search results</p>}
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold py-5">Top Reads</h3>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
                    {popular.length > 0 ? popular.map((e,i)=>
                        <BookCard key={i} title={e.volumeInfo.title} year={e.volumeInfo.publishedDate} img={e.volumeInfo?.imageLinks?.thumbnail} id={e.id} page={e.volumeInfo.pageCount}/>
                    ): <p className="text-center text-gray-200 font-light">No Data</p>}
                </div>
            </div>
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold py-10">You Might Also Like</h3>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
                    {random.length > 0 ? random.map((e,i)=>
                         <BookCard key={i} title={e.volumeInfo.title} year={e.volumeInfo.publishedDate} img={e.volumeInfo?.imageLinks?.thumbnail} id={e.id} page={e.volumeInfo.pageCount}/>
                    ): <p className="text-center text-gray-200 font-light">No Data</p>}
                </div>
            </div>
        </div>
    )
}

export default BookApp;