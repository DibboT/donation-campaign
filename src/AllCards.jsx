import { useEffect, useState } from "react";
import Card from './Card'

const AllCards = () => {
    const [cards, setAllCards] = useState([]);

    useEffect(() => {
        fetch('./Donation.json')
        .then(res => res.json())
        .then(data => setAllCards(data))

    })

    return (
        <div>
             <div className="text-center">
                <h2 className="text-4xl font-bold mb-6">I Grow By Helping People In Need</h2>
                <input className="border-black border-solid p-2 w-[300px]" type="text" placeholder="Search Here"></input>
                <button className="bg-[#FF444A] text-white p-2">Search</button>
            </div>
            <div className="mx-10 mt-[20%] grid grid-cols-4 gap-6">

            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
        
    );
};

export default AllCards;