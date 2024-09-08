// eslint-disable-next-line react/prop-types
const BookSearchItem = ({title, year, id})=>{
    return(
        <a href={`/books/${id}`}>
            <div className="flex gap-2 text-primary py-2 px-4 border-b-2 border-b-slate-50 last:border-none hover:bg-slate-100 hover:first:rounded-t-lg hover:last:rounded-b-lg cursor-pointer">
                <p className="font-semibold text-lg">{title}</p>
                <p className="font-light text-lg text-gray-600">{year}</p>
            </div>
        </a>
    )
}

export default BookSearchItem;