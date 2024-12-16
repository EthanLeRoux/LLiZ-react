import { Link } from "react-router-dom";
import { useState } from "react";
import './styles/Navigation.css';
import logo from './assets/logo.png'; // Import your logo image

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu toggle

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state
    };

    return (
        <nav className="navigation">
            <div className="container">
                <div className="brand">
                    <Link to="/" className="logo-link">
                        <img
                            src={logo}
                            alt="LLiZ Logo"
                            className="logo-image"
                        />
                    </Link>
                </div>
                <button
                    className={`menu-toggle ${menuOpen ? "active" : ""}`}
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    &#9776;
                </button>
                <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/res">Resources</Link></li>
                    <li><Link to="/admin">Blog Maker</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
