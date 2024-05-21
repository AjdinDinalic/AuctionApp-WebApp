import { Link } from "react-router-dom";
import facebook from "../../assets/facebook-circle.svg"
import instagram from "../../assets/instagram-circle.svg"
import twitter from "../../assets/twitter-circle.svg"

const Footer = () => {
    return ( <>
    <div id="footer" className="flex columns-2 w-full h-48 bg-slate-900 absolute inset-x-0 bottom-0 justify-around pt-4">
<div className="flex flex-col gap-3">
    <p className="font-thin">AUCTION</p>
<Link to={"/about-us"} className="">About Us</Link>
<Link to={""} className="">Terms and Conditions</Link>
<Link to={""} className="">Privacy and Policy</Link>
</div>
<div className="flex flex-col gap-3">
<p className="font-thin">GET IN TOUCH</p>
<p className="">Call us at +123 456 789</p>
<p className="">support@auction.com</p>
<div className="flex flex-row gap-3">
<a href=""><img src={facebook} alt="" className="object-contain max-h-8" /></a>
<a href=""><img src={instagram} alt="" className="object-contain max-h-8"/></a>
<a href=""><img src={twitter} alt="" className="object-contain max-h-8"/></a>   
</div>
</div>
    </div>
    </> );
}
 
export default Footer;