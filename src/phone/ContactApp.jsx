import { useEffect, useState } from "react";
import ContactCard from "../components/contactCard";

const ContactApp = ()=>{
  const [getContact, setContact] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [getFormData, setFormData] = useState({
    name:'',
    number:'',
    location:'',
    id:0
  });

  useEffect(()=>{
    console.log(getContact, "contact");
  }, [getContact]);

  const addContact = (e)=>{
    e.preventDefault();
    if(getFormData.name !== '' || getFormData.location !== '' || getFormData.location !== '')
      setContact([...getContact, {name: getFormData.name, number: getFormData.number, location: getFormData.location, id: getContact.length + 1}]);
      setFormData({
        name:'',
        number:'',
        location:'',
        id:0
      })
  }

  const deleteContact = (id)=>{
    setContact(getContact.filter((e => e.id !== id)));
  }

  const editContact = (id)=>{
    const contact = getContact.filter((e => e.id == id));
    setFormData({
      name:contact[0].name,
      number:contact[0].number,
      location: contact[0].location,
      id:contact[0].id
    });
    setIsEdit(true);
  }

  const updateContact = (id)=>{
    const contacts = getContact.filter((e => e.id !== id));
    setContact([...contacts, {name: getFormData.name, number: getFormData.number, location: getFormData.location, id: id}]);
    setFormData({
      name:'',
      number:'',
      location:'',
      id:0
    })
    setIsEdit(false);
  }

  // useEffect(()=>{
  //   console.log(getFormData.name, "name");
  //   console.log(getFormData.number, "number");
  //   console.log(getFormData.location, "location");
  //   console.log(getFormData.id, "id");
  // }, [getFormData]);
  
  return (
    <div className="grid grid-cols-1 gap-4 px-5 py-5 bg-blue-500 w-full h-full">
      <div className="flex flex-col bg-white border shadow-sm rounded-xl">
        <div className="p-4 md:p-5">
          <h1 className="mt-1 text-2xl">Add new contact</h1>
          <form onSubmit={addContact}>
            <div className="mt-2">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input value={getFormData.name} onChange={(e)=>setFormData({...getFormData, name: e.target.value})} type="text" name="name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter Name"/> 
            </div>
            <div className="mt-2">
              <label htmlFor="number" className="block text-sm font-medium mb-2">Phone Number</label>
              <input value={getFormData.number} onChange={(e)=>setFormData({...getFormData, number: e.target.value})} type="text" name="number" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter Phone Number"/> 
            </div>
            <div className="mt-2">
              <label htmlFor="location" className="block text-sm font-medium mb-2">Location</label>
              <input value={getFormData.location} onChange={(e)=>setFormData({...getFormData, location: e.target.value})} type="text" name="location" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter Location"/> 
            </div>
            <div className=" my-4 border-t-2 border-gray-300"></div>
            {isEdit ?  <a onClick={()=>updateContact(getFormData.id)} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none">
              Edit Contact
            </a> :  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Add Contact
            </button>}
            {/* <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Add Contact
            </button> */}
          </form>
          <div className="border-2 border-gray-300 rounded-lg py-2 px-2 mt-5">
           <h1 className="mt-1 text-2xl">Contact List</h1>
            {getContact.length > 0 ? getContact.map((e, i)=>
            <ContactCard key={i} id={e.id} name={e.name} location={e.location} number={e.number} deleteData={deleteContact} editData={editContact}/>
           ) : <p className="text-center">No Contacts</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactApp;