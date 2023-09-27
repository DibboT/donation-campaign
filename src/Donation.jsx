import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getSaveDonatedCard } from "./LocalStorage";
import DonatedCard from "./DonatedCard";


const Donation = () => {
    const [donation, setDonation] = useState([])
    const allDonations = useLoaderData();

    useEffect(() => {
        const donatedItems = getSaveDonatedCard();
        if (donatedItems) {
            let donations = allDonations.filter(donation => donation.id == donatedItems[donatedItems.indexOf(donation.id)]);
            setDonation(donations);
        }
        else {
            console.log('No Data Found')
        }
    }, [])
    return (
        <div>
            <div className="">
                
                
                {donation.map(donation => <DonatedCard key={donation.id} donatedcard={donation}></DonatedCard>)}
            </div>

            
        </div>
    );
};

export default Donation;