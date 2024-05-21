import { Link } from "react-router-dom";
import logo from "../../assets/auction-logo.svg"
import facebook from "../../assets/facebook-circle.svg"
import instagram from "../../assets/instagram-circle.svg"
import twitter from "../../assets/twitter-circle.svg"


const Header = () => {
    return ( <>
    <div id="header" className=" flex flex-row w-full h-11 bg-slate-900 justify-around items-center">
        <div className="flex flex-row gap-3">
         <a href=""><img src={facebook} alt="" className="object-contain max-h-8 " /></a>
<a href=""><img src={instagram} alt="" className="object-contain max-h-8" /></a>
<a href=""><img src={twitter} alt="" className="object-contain max-h-8"/></a>   
        </div>
<div className="flex flex-row gap-3">
    <Link to={"/log-in"}>Log in</Link>
<p>or</p>
<Link to={"/register"}>Register</Link>
</div>
    </div>
    <div className="flex justify-center items-center gap-3 pt-3">
        
          <img src={logo} alt="" className="max-h-16"/><p id="logo" className="font-thin text-2xl">AUCTION</p>  

        </div>
    </> );
}
 
export default Header;