import './Navigation.css'
import {Link} from "react-router-dom";

function Navigation(){

    return(
        <>
            <div className="Navigation">
                <span>
                    <Link to={"/"} className={"Logo"}>LLiZ</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/grammar"}>Grammar</Link>
                    <Link to={"/res"}>Resources</Link>
                    <Link to={"/maker"}>Blog Maker</Link>
                </span>
            </div>
        </>
    )
}

export default Navigation;