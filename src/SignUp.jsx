import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import './Form.css'
import postUser from "./PostUser.js";
import secretKeyGenerator from "./secretKeyGenerator.js";

function SignUp(){
    const[email,setEmail] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handleChangeUsername = function (event){
        setUsername(event.target.value);
    }
    const handleChangePassword = function (event){
        setPassword(event.target.value);
    }

    const secret = secretKeyGenerator();

    const formSubmit = (event) =>{
        event.preventDefault();
        const userData = {
            userEmail: email,
            userName:username,
            userPassword: password,
            userKey: secret
        }
        postUser(userData);
        navigate("/login");
    }
    return(
    <>
        <div className={"content"}>
            <h1>Sign Up</h1>
            <form onSubmit={formSubmit}>
                <p>
                    <input className={"formInput"} type={"email"} placeholder={"Email goes here"} value={email}
                           onChange={handleChangeEmail}/>
                </p>

                <p>
                    <input className={"formInput"} type={"text"} placeholder={"Username goes here"} value={username}
                           onChange={handleChangeUsername}/>
                </p>

                <p>
                    <input className={"formInput"} type={"password"} placeholder={"Password goes here"} value={password}
                           onChange={handleChangePassword}/>
                </p>

                <p>
                    <input className={"formInputSubmit"} type={"submit"}  value={"Sign Up"}/>
                </p>

                <Link to={"/login"}>Already have an account? Login here</Link>

            </form>
        </div>
    </>
    )
}

export default SignUp;