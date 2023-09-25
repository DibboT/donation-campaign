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
                <h2 className="text-xl font-bold md:text-2xl md:font-bold lg:text-4xl lg:font-bold mb-6">I Grow By Helping People In Need</h2>
                <input className="w-[150px] border-black border-solid md:p-2 md:w-[300px]" type="text" placeholder="Search Here"></input>
                <button className="text-sm bg-[#FF444A] text-white p-2 lg:text-xl">Search</button>
            </div>
            <div className="grid grid-cols-1 mx-10 mt-[20%] lg:grid lg:grid-cols-4 gap-6">

            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
        </div>
        
    );
};

export default AllCards;