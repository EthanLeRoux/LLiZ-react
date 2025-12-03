import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/Navigation.css';
import logo from './assets/logo.png';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        const role = sessionStorage.getItem("role");

        if (username && role) {
            setUser({
                username: JSON.parse(username),
                role: JSON.parse(role),
            });
        } else {
            setUser(null);
        }
    }, []);

    const isLoggedIn = user !== null;
    const isAdmin = user?.role === "admin";

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
                    {isLoggedIn && (
                        <li><Link to="/profile">Profile</Link></li>
                    )}

                    {!isLoggedIn && (
                        <li><Link to="/login">Login</Link></li>
                    )}

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
