import {useState} from "react";
import './Form.css'
import {Link} from "react-router-dom";
function Login(){
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const handleChangeUsername = function (event){
        setUsername(event.target.value);
    }
    const handleChangePassword = function (event){
        setPassword(event.target.value);
    }

    const formSubmit = () =>{

    }

return(
    <>
        <div className={"content"}>
            <h1>Login</h1>
            <form>
                <p>
                    <input className={"formInput"} type={"text"} placeholder={"Username goes here"} value={username}
                           onChange={handleChangeUsername}/>
                </p>
                <p>
                    <input className={"formInput"} type={"password"} placeholder={"Password goes here"} value={password}
                           onChange={handleChangePassword}/>
                </p>
                <p>
                    <input className={"formInputSubmit"} type={"submit"} value={"Login"} onSubmit={formSubmit}/>
                </p>
                <Link to={"/signup"}>Dont have an account? Sign Up here</Link>

            </form>
        </div>

    </>
)
}

export default Login;