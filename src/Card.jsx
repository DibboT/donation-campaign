
import { Link } from 'react-router-dom';
const Card = ({card}) => {
    const {id, image, title, category, category_bg, background_color } = card;
    console.log(title)

    return (
        <div>
            <Link to={`/donation/${id}`}>
            <div className="card card-compact w-90 h-950 bg-base-100 shadow-xl cursor-pointer">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body" style={{ backgroundColor: background_color}}>
                    <button className="p-2 ml-2" style={{backgroundColor: category_bg}}>{category}</button>
                    <h2 className="card-title font-semibold py-2 ml-2">{title}</h2>
                </div>

            </div> 
            </Link>
            
        

        </div>
    );
};

export default Card;