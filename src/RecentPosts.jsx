import {useEffect, useState} from "react";
import getBlogs from "./GetBlogs.js";
import {useNavigate} from "react-router-dom";
import {Card} from "react-bootstrap";
import './styles/RecentPosts.css';

function    RecentPosts(){
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Ensure it starts as true
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBlogs() {
            console.log("Fetching blogs..."); // Debugging log
            try {
                const data = await getBlogs();
                console.log("Blogs fetched successfully:", data); // Log fetched data
                setBlogs(data);
            } catch (error) {
                console.error("Error during fetch:", error.message); // Log the error
                setError(error.message);
            } finally {
                console.log("Finished fetching blogs."); // Debugging log
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    console.log("Loading state:", loading);
    console.log("Error state:", error);
    console.log("Blogs state:", blogs);

    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div>Error: {error}</div>; // Show error message if any
    if (blogs.length === 0) return <div>No blogs found.</div>; // Handle empty blogs

    const recentBlogs = blogs.slice(0, 3);

    const handleClick = function (blog){
        navigate(`/posts/${blog.id}`);
    }

    return(
        <>
            <h2>Recent Posts</h2>
            <div className={"recentPostsContainer"}>

                {recentBlogs.map((blog) => (
                    <Card className={"recentpost"} style={{}} key={blog.id} onClick={() => handleClick(blog)}>
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>{blog.content}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </>
    )
}

export default RecentPosts;