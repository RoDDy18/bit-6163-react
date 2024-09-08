import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/bookCard";

const BookDetail = ()=>{
    const {bookId} = useParams();
    const [book, setBook] = useState({});
    const [recommended, setRecommended] = useState([]);

    useEffect(()=>{
        try{
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${book?.volumeInfo?.authors[0]}`).then((res)=>{
                if(res.data.items){
                    setRecommended(res.data.items);
                }
            })
        }catch(err){console.log(err)}
    }, [book])

    useEffect(()=>{
        try{
            axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then((res)=>{
                if(res.data){
                    setBook(res.data);
                }
            })
        }catch(err){console.log(err)}

    }, [bookId])
    

    return (
        <div className="text-white font-poppins">
            <div className="bg-books-1 py-[20px] bg-cover bg-no-repeat justify-center content-center items-center w-full">
                <div className="container mx-auto">
                    <a href="/books">
                        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            Back
                        </button>
                    </a>
                    <div className="grid grid-cols-7 gap-4 pt-2">
                        <div className="">
                            <img className="w-full h-[300px] object-cover rounded-xl" src={book?.volumeInfo?.imageLinks?.thumbnail ? book?.volumeInfo?.imageLinks?.thumbnail : "http://books.google.com/books/content?id=QPGSzgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71dYx5lKu16r2___H_Vps-jEUrda3fzpn4Lv4tXD1a9avii5bVefH8rX4fgBdxWPfMHv4yPclvwzkh7Ku7cQKC2QE39-ig9Rm9Yy4xgBogqV7oGoW-WWnK4DL7a1y8PlN_r-rja&source=gbs_api"} alt="Card Image"/>
                        </div>
                        <div className="col-span-6">
                            <h2 className="text-2xl">{book?.volumeInfo?.title}<span className={!book?.volumeInfo?.subtitle ? 'hidden' : ''}>:</span></h2>
                            <h2 className="text-md text-gray-200 font-light">{book?.volumeInfo?.subtitle}</h2>
                            <p className="text-base font-normal mt-2">by {book?.volumeInfo?.authors[0]}</p>
                            <h3 className="text-xl mt-5">Summary</h3>
                            {/* <p className="text-base font-light text-gray-300"> {book?.volumeInfo?.description}</p> */}
                            <div className="text-base font-light text-gray-300" dangerouslySetInnerHTML={{ __html: book?.volumeInfo?.description }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-5">
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>Print Length</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg></p>
                        <p>{book?.volumeInfo?.pageCount ? book?.volumeInfo?.pageCount : "-"}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>Language</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></p>
                        <p>{book?.volumeInfo?.language ? book?.volumeInfo?.language : "-"}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>Publisher</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></p>
                        <p>{book?.volumeInfo?.publisher ? book?.volumeInfo?.publisher : "-"}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>Publication Date</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg></p>
                        <p>{book?.volumeInfo?.publishedDate ? book?.volumeInfo?.publishedDate : "-"}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <h3 className="text-3xl font-bold py-10">More from {book?.volumeInfo?.authors[0]}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
                    {recommended.length > 0 ? recommended.map((e,i)=>
                         <BookCard key={i} title={e.volumeInfo.title} year={e.volumeInfo.publishedDate} img={e.volumeInfo?.imageLinks?.thumbnail} id={e.id} page={e.volumeInfo.pageCount}/>
                    ): <p className="text-center text-gray-200 font-light">No Data</p>}
                </div>
            </div>
        </div>
    )
}

export default BookDetail;