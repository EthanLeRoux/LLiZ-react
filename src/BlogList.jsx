import {useEffect, useState} from "react";
import getBlogs from "./GetBlogs.js";
import {Link} from "react-router-dom";
import { Card, Row, Col, Button } from 'react-bootstrap';

function BlogList(){
    const[blogs,setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            try{
                const data = await getBlogs();
                setBlogs(data);
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        fetchBlogs();
    },[]);

    if (loading) return <div>Loading...</div>;  // Show loading message
    if (error) return <div>Error: {error}</div>;  // Show error message if any

    return (
        <>
            <h1>Grammar Lessons</h1>
            <ul>
                {blogs.map((blog => (
                        <li key={blog.id}>
                            {/* Link to the individual blog page */}
                            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </li>
                    ))
                )}
            </ul>
        </>
    )
}

export default BlogList;