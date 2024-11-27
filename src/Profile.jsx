import "./styles/Profile.css";
import {useNavigate} from "react-router-dom";
import OTPComponent from "./OTPComponent.jsx";
import ShowQRCode from "./ShowQRCode.jsx";

function Profile() {
    // Mock data for the user profile. Replace this with data from your API or state.
    const user = {
        profilePicture: "src/assets/profile.png", // Placeholder image
        username: JSON.parse(sessionStorage.getItem('username')),
        email: "john.doe@example.com",
        role: JSON.parse(sessionStorage.getItem('role'))
    };
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear();
        alert("You have logged out.");
        navigate("/");
    }
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    className="profile-picture"
                    src={user.profilePicture}
                    alt={`${user.username}'s profile`}
                />
                <h1 className="profile-username">{user.username}</h1>
                <p className="profile-role">{user.role}</p>
            </div>

            <div className="profile-actions">

                <ShowQRCode/>
                <p>
                    Scan the code to set up 2 factor authentication with your authenticator app.
                </p>
                <p>
                    <button className="btn-edit">Edit Profile</button>
                </p>

                <p>
                    <button className="btn-logout" onClick={logout}>Log Out</button>
                </p>
            </div>
        </div>
    );
}

export default Profile;
