import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/BlogPage.css';
import parse from 'html-react-parser';
import { ReactCusdis } from 'react-cusdis'

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [tags,setTags] = useState([]);

    useEffect(() => {
        async function fetchBlog() {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
            const data = await response.json();
            setBlog(data);
            setTags(data.tags);
        }

        fetchBlog();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    return (
        <div style={{padding: 20}}>
            <div>
                <h1>{blog.title}</h1>
                <p className={"createdBy"}>By {blog.author}</p>
                <div className={"tags"}>
                    {
                        tags.map(function (currentTag, index) {
                            return (<div key={index} className={"blogTag"}>{currentTag}</div>)
                        })
                    }
                </div>
                <div>
                    {parse(blog.content)}
                </div>
            </div>
            <br/>
            <br/>
            <ReactCusdis
                attrs={{
                    host: 'https://cusdis.com',
                    appId: blog.appId,
                    pageId: id,
                    pageTitle: blog.title,
                    pageUrl: `${import.meta.env.VITE_API_URL}/api/blogs/${id}`
                }}
                className={'cusdis'}
            />
        </div>
    );
}

export default BlogPage;
