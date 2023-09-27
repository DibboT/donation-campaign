

const DonatedCard = (donation) => {
    return (
        <div className="">
            <div className="card card-compact w-90 h-950 bg-base-100 shadow-xl cursor-pointer">
                <figure><img className="w-[300px] h-[170px]" src={donation.image} alt="" /></figure>
                <div className="card-body">
                    <button className="p-2 ml-2" ></button>
                    <h2 className="card-title font-semibold py-2 ml-2" ></h2>
                </div>

            </div> 
        </div>
    );
};

export default DonatedCard;