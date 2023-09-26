import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "./LocalStorage";


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams(); 
    const idInt = parseInt(id);
    let donation = donations.find(donation => donation.id == idInt);
    console.log(idInt)
 
    
 const handleDonate = () => {
   
    saveDonation(idInt);
    toast('You Have Donated For This Campaign, Thank You')   

 }
 
 

    return (
        <div>
            <div className="my-10">
                <div className="card card-compact w-[85%] bg-base-100 shadow-xl m-auto relative bg-blend-overlay">
                    <figure><img className="m-auto bg-blend-color-[#0b0b0b80]" src={donation.image} alt="" /></figure>
                    <div className="absolute right-[53%] top-[40%]">
                        <button onClick={handleDonate} className="bg-red-400 px-2 text-md text-white cursor-pointer">Donate ${donation.price}</button>
                        <ToastContainer />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold px-4 py-4">{donation.title}</h2>
                        <p className="px-4 pb-10">{donation.description}</p>

                    </div>
                </div>
                {/* <img src={donation.image}></img>
                <h2 className="text-3xl text-gray-950">{donation.title}</h2>
                <p>{donation.description}</p> */}
            </div>


        </div>
    );
};

export default DonationDetails;