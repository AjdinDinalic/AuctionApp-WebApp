import { Link } from "react-router-dom";


const Header = () => {
    return ( <>
    <div id="header" className=" flex flex-row w-full h-11 bg-slate-900 justify-around items-center">
        <div className="flex flex-row">
         <a href=""><img src="" alt="" /></a>
<a href=""><img src="" alt="" /></a>
<a href=""><img src="" alt="" /></a>   
        </div>
<div className="flex flex-row gap-3">
    <Link to={"/log-in"}>Log in</Link>
<p>or</p>
<Link to={"/register"}>Register</Link>
</div>
    </div>
    </> );
}
 
export default Header;