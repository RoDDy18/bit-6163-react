// eslint-disable-next-line react/prop-types
const BookCard = ({title, year, img, id, page})=>{
    return (
        <div className="flex flex-col shadow-sm rounded-xl w-[100%] relative cursor-pointer">

            <a href={`/books/${id}`}>
                <div className="text-sm rounded-full w-10 h-10 bg-blue-500 font-bold flex items-center justify-center absolute top-2 right-2">
                    <p>{page ? page : 0}</p>
                </div>
                <img className="w-full h-[300px] object-cover rounded-xl" src={img ? img : "http://books.google.com/books/content?id=QPGSzgEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71dYx5lKu16r2___H_Vps-jEUrda3fzpn4Lv4tXD1a9avii5bVefH8rX4fgBdxWPfMHv4yPclvwzkh7Ku7cQKC2QE39-ig9Rm9Yy4xgBogqV7oGoW-WWnK4DL7a1y8PlN_r-rja&source=gbs_api"} alt="Card Image"/>
                <p className="font-semibold text-md pt-2">{title}</p>
                <p className="font-light text-sm">{year}</p>
            </a>
        </div>
    )
}

export default BookCard;