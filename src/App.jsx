import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./Resources.jsx";
import About from "./About.jsx";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import "./styles/App.css"
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import BlogList from "./BlogList.jsx";
import BlogPage from "./BlogPage.jsx";
import Profile from "./Profile.jsx";
import Admin from "./Admin.jsx";
import ProfileEditor from "./ProfileEditor.jsx";
import DeleteUserComp from "./DeleteUserComp.jsx";

function App() {
  return (
    <>
        <Router>
            <Navigation></Navigation>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/editprofile" element={<ProfileEditor/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/posts" element={<BlogList/>} />
                <Route path="/res" element={<Resources/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/deleteAccount" element={<DeleteUserComp/>} />

                    {/* Route for the list of blogs */}
                    <Route path="/" element={<BlogList/>} />

                    {/* Route for each individual blog page */}
                    <Route path="/posts/:id" element={<BlogPage/>} />

                <Route
                    path="/admin"
                    element={<Admin/>}
                />
            </Routes>
        </Router>

    </>
  )
}

export default App
