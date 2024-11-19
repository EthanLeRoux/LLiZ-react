import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grammar from "./Grammar.jsx";
import Resources from "./Resources.jsx";
import About from "./About.jsx";
import Navigation from "./Navigation.jsx";
import Home from "./Home.jsx";
import "./App.css"
import BlogMaker from "./BlogMaker.jsx";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
function App() {

  return (
    <>
        <Router>
            <Navigation></Navigation>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/grammar" element={<Grammar/>} />
                <Route path="/res" element={<Resources/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/maker" element={<BlogMaker/>} />
            </Routes>
        </Router>

    </>
  )
}

export default App
