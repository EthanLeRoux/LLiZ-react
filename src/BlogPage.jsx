import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './styles/BlogPage.css';
import parse from 'html-react-parser';
import { ReactCusdis } from 'react-cusdis'
import CommentSection from "./CommentSection";
import LikeDislike from "./LikeBtn";

function BlogPage() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [tags,setTags] = useState([]);

    useEffect(() => {
        async function fetchBlog() {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
            const data = await response.json();
            setBlog(data);
            setTags(data.tags.map(tag => tag));
            console.log(data);
        }

        fetchBlog();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    const loggedInUserId = JSON.parse(sessionStorage.getItem('userid'));
    const isAuthor = String(blog.authorId) === String(loggedInUserId);

    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
        },
        editButton: {
            backgroundColor: "blueviolet",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem",
            textDecoration: "none",
            display: "inline-block",
        },
    };

    return (
        <div style={{padding: 20}}>
            <div style={styles.header}>
                <h1 style={{ margin: 0 }}>{blog.title}</h1>
                {isAuthor && (
                    <Link to={`/edit/${id}`} style={styles.editButton}>
                        Edit Post
                    </Link>
                )}
            </div>
            <div>
                <p className={"createdBy"}>By {blog.author}</p>
                <div className={"tags"}>
                    {
                        tags.map(function (currentTag, index) {
                            return (<div key={index} className={"blogTag"}>{currentTag.tag_name}</div>)
                        })
                    }
                </div>
                <div>
                    {parse(blog.content)}
                </div>
            </div>
            <br/>
            <br/>
            <LikeDislike blogId={id} authorId={blog.authorId} initialLikes={blog.likes?.length || blog.likes || 0} />

            <CommentSection blogId={id} />
            {/* <ReactCusdis
                attrs={{
                    host: 'https://cusdis.com',
                    appId: blog.appId,
                    pageId: id,
                    pageTitle: blog.title,
                    pageUrl: `${import.meta.env.VITE_API_URL}/api/blogs/${id}`
                }}
                className={'cusdis'}
            /> */}
        </div>
    );
}

export default BlogPage;
