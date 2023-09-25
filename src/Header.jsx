import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            
            <div className="flex justify-between m-10 p-4">
            <img src="https://i.ibb.co/vhKCXvq/donationlogo.png"/>
            {/* <div className="flex"> 
                    <img src="/resources/logo.png" />
                    <div>
                    <h2 className="text-3xl text-red-600 font-semibold">Donation</h2>
                    <p>Campaign</p>
                    
                    </div>
                    
                </div> */}
                
                <div className="flex gap-4 list-none">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/donation">Donation</NavLink></li>
                    <li><NavLink to="/Statistics">Statistics</NavLink></li>                 
                </div>


            </div>
           
        </div>

    );
};

export default Header;