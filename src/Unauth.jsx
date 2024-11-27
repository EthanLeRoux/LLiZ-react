import {Link} from "react-router-dom";

function Unauth(){

    return (
        <>
            <div style={{padding: 20}}>
                <h2>Access restriction</h2>
                <p>
                    You are unauthorized to access this page.
                </p>
                <Link to={"/"}>Go to home.</Link>
            </div>

        </>
    )
}

export default Unauth;