// eslint-disable-next-line react/prop-types
const ContactCard = ({id, name, location, number, deleteData, editData})=>{
    return (
        <div className="border-2 border-gray-300 rounded-lg py-2 px-2 mt-5 bg-green-50">
            <div className="flex justify-between">
                <div>
                    <div>
                        <p>{name}</p>
                    </div>
                    <div className="flex gap-2">
                        <p>{location},</p>
                        <p className="text-red-500">{number}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                <button onClick={()=>editData(id)} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-black hover:bg-yellow-600 focus:outline-none focus:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none">
                    Edit
                </button>
                <button onClick={()=>deleteData(id)} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none">
                    Delete
                </button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;