import {useState} from "react";
import './styles/Form.css'
import {Link, useNavigate} from "react-router-dom";
import postUserLogin from "./PostUserLogin.js";

function Login(){
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeUsername = function (event){
        setUsername(event.target.value);
    }
    const handleChangePassword = function (event){
        setPassword(event.target.value);
    }
    
    const formSubmit = async function (event) {
        event.preventDefault();
        const userData = {
            userName: username,
            userPassword: password
        };

        const data = await postUserLogin(userData);

        if (data) {  // Ensure data is returned from the login function
            // Clear the fields
            setUsername("");
            setPassword("");

            // Alert for successful login
            alert(data.message);           // Navigate to home page after successful login
            navigate("/");
        } else {
            // If login fails
            alert("Login unsuccessful. Password or Username is incorrect.");
            setUsername("");
            setPassword("");
        }
    };

    return(
    <>
        <div className={"content"}>
            <h1>Login</h1>
            <form onSubmit={formSubmit}>
                <p>
                    <input className={"formInput"} type={"text"} placeholder={"Username goes here"} value={username}
                           onChange={handleChangeUsername}/>
                </p>
                <p>
                    <input className={"formInput"} type={"password"} placeholder={"Password goes here"} value={password}
                           onChange={handleChangePassword}/>
                </p>
                <p>
                    <input className={"formInputSubmit"} type={"submit"} value={"Login"} />
                </p>
                <Link to={"/signup"}>Dont have an account? Sign Up here</Link>

            </form>
        </div>

    </>
)
}

export default Login;