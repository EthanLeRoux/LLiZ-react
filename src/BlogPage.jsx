import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/BlogPage.css';
import parse from 'html-react-parser';
import { ReactCusdis } from 'react-cusdis'

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
            const data = await response.json();
            setBlog(data);
        }

        fetchBlog();
    }, [id]);

    // useEffect(() => {
    //     if (!document.querySelector('script[src="https://cusdis.com/js/cusdis.es.js"]')) {
    //         const script = document.createElement('script');
    //         script.src = 'https://cusdis.com/js/cusdis.es.js';
    //         script.async = true;
    //         document.body.appendChild(script);
    //
    //         script.onload = () => {
    //             if (window.cusdis) {
    //                 window.cusdis.renderTo(document.getElementById('cusdis_thread'));
    //             }
    //         };
    //
    //         return () => {
    //             document.body.removeChild(script);
    //         };
    //     } else {
    //         // Script already exists, just render Cusdis
    //         if (window.cusids) {
    //             window.cusdis.renderTo(document.getElementById('cusdis_thread'));
    //         }
    //     }
    // }, []);

    if (!blog) return <div>Loading...</div>;

    return (
        <div style={{padding: 20}}>
            <div>
                <h1>{blog.title}</h1>
                <p className={"createdBy"}>By {blog.author}</p>
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
