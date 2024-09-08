// eslint-disable-next-line react/prop-types
const MovieCard = ({title, year, img, id})=>{
    return (
        <div className="flex flex-col shadow-sm rounded-xl w-[100%] relative cursor-pointer">
            <a href={`/movies/${id}`}>
                <div className="rounded-full w-10 h-10 bg-blue-500 font-bold flex items-center justify-center absolute top-2 right-2">
                    <p>90</p>
                </div>
                <img className="w-full h-[300px] object-cover rounded-xl" src={img} alt="Card Image"/>
                <p className="font-bold text-lg">{title}</p>
                <p className="font-light text-sm">{year}</p>
            </a>
        </div>
    )
}

export default MovieCard;