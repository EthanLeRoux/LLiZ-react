import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import timestampConverter from "./TimestampConverter.js";
import parse from 'html-react-parser';

function BlogPage (){
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
            const response = await fetch(`http://localhost:8080/api/blogs/${id}`);
            const data = await response.json();
            setBlog(data);
        }

        fetchBlog();
    }, [id]);  // Re-run the effect when the ID changes

    if (!blog) return <div>Loading...</div>;

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>Created at {timestampConverter(blog.createdAt)}</p>
            <p>
                {parse(blog.content)}
            </p>

        </div>
    );
}

export default BlogPage;