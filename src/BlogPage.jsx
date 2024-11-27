import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import timestampConverter from "./TimestampConverter.js";
import parse from 'html-react-parser';
import './styles/BlogPage.css'
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
        <div style={{padding: 20}}>
            <h1>{blog.title}</h1>
            <h5>
                By {blog.author}
            </h5>
            <p className={"createdBy"}>Created at {timestampConverter(blog.createdAt)}</p>
            <p>
                {parse(blog.content)}
            </p>

        </div>
    );
}

export default BlogPage;