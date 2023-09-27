

const DonatedCard = ({donatedCard}) => {
    const {image, title, title_color,  category, category_bg, background_color, price, button_bg } = donatedCard;
    return (
        <div className="mx-auto mt-10">
            <div className="w-[500px] h-950 bg-base-100 shadow-xl cursor-pointer flex gap-4" style={{backgroundColor: background_color}}>
                <figure><img className="w-[140px] h-[150px]" src={image} alt="" /></figure>
                <div className="card-body mt-4">
                    <p className="w-[80px] h-[30px] font-semibold text-center" style={{backgroundColor: category_bg, color: button_bg }}>{category}</p>
                    <h2 className="text-black font-semibold text-xl">{title}</h2>
                    <p className="font-semibold mb-2" style={{color: title_color}}>$ {price}</p>
                    <button className="p-[4px] mb-2 text-white" style={{backgroundColor: button_bg}} >View Details</button>
                </div>

            </div> 
        </div>
    );
};

export default DonatedCard;