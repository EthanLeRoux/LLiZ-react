import { useEffect, useState } from "react";
import getBlogs from "./GetBlogs.js";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import './styles/RecentPosts.css';

function RecentPosts() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBlogs() {
            console.log("Fetching blogs...");
            try {
                const data = await getBlogs();
                if (!data) {
                    throw new Error("Failed to fetch blogs. Please check your connection.");
                }
                setBlogs(data);
            } catch (error) {
                console.error("Error during fetch:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    console.log("Loading state:", loading);
    console.log("Error state:", error);
    console.log("Blogs state:", blogs);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!blogs || blogs.length === 0) return <div>No blogs found.</div>;

    const recentBlogs = blogs.slice(0, 3);

    const handleClick = (blog) => {
        navigate(`/posts/${blog.id}`);
    };

    return (
        <>
            <h2>Recent Posts</h2>
            <div className="recentPostsContainer">
                {recentBlogs.length > 0 ? (
                    recentBlogs.map((blog) => (
                        <Card className="recentpost" key={blog.id} onClick={() => handleClick(blog)}>
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>{blog.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card className="recentpost">
                        <Card.Body>
                            <Card.Title>No recent posts.</Card.Title>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    );
}

export default RecentPosts;
