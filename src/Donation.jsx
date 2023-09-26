import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { getSaveDonatedCard } from "./LocalStorage";


const Donation = () => {
    const [donation, setDonation] = useState([])
    const allDonations = useLoaderData();

    useEffect(() =>{
        const donatedItems = getSaveDonatedCard();
        if (donatedItems)
        {
            let donations = allDonations.filter(donation => donation.id ==donatedItems[ donatedItems.indexOf(donation.id)]);
            setDonation(donations);
        }
        else{
            console.log('No Data Found')
        }
    },[])
    return (
        <div> 
        <div className="grid grid-cols-2">
        {donation.map(donation=> <Card key={donation.id} card={donation}></Card>)}
        </div>
            
            
        </div>
    );
};

export default Donation;