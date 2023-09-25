import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    let donation = donations.find(donation => donation.id == idInt);
    console.log(donations, id)
    return (
        <div>
            <div>
                <div className="card card-compact w-[85%] bg-base-100 shadow-xl m-auto">
                    <figure><img className="m-auto" src={donation.image} alt="Shoes" /></figure>
                    <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">{donation.title}</h2>
                        <p>{donation.description}</p>
                       
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