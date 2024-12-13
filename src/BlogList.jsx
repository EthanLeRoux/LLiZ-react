import { useEffect, useState } from "react";
import getBlogs from "./GetBlogs.js";
import { Link } from "react-router-dom";

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Ensure it starts as true
    const [error, setError] = useState(null);

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

    // Debugging logs for state
    console.log("Loading state:", loading);
    console.log("Error state:", error);
    console.log("Blogs state:", blogs);

    if (loading) return <div>Loading...</div>; // Show loading message
    if (error) return <div>Error: {error}</div>; // Show error message if any
    if (blogs.length === 0) return <div>No blogs found.</div>; // Handle empty blogs

    return (
        <>
            <h1>Grammar Lessons</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default BlogList;
