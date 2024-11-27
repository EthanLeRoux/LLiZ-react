import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import './styles/Form.css'
import postUser from "./PostUser.js";
import secretKeyGenerator from "./secretKeyGenerator.js";
import postUserLogin from "./PostUserLogin.js";
import * as OTPAuth from "otpauth";



function SignUp(){
    const[email,setEmail] = useState("");
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const totp = new OTPAuth.TOTP({
        issuer: 'LLiZ',
        label: (sessionStorage.getItem('username')),
        algorithm: 'SHA1',
        digits: 6,
        period: 60,
        secret: new OTPAuth.Secret().base32 // Use a securely generated secret
    });

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handleChangeUsername = function (event){
        setUsername(event.target.value);
    }
    const handleChangePassword = function (event){
        setPassword(event.target.value);
    }

    const secret = totp.secret.base32;
    let auth = totp.toString();

    sessionStorage.setItem('auth', auth);
    const formSubmit = (event) =>{
        event.preventDefault();
        const userData = {
            userEmail: email,
            userName:username,
            userPassword: password,
            userKey: secret
        }

        const data = postUser(userData);

        if(data){
            alert('Successful signup!');
            navigate("/login");
        }
        else{
            alert("Something went wrong. Please try again.")
        }

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