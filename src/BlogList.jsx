import { useEffect, useState } from "react";
import getBlogs from "./GetBlogs.js";
import { Link } from "react-router-dom";

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const styles = {
        container: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            padding: "20px",
            listStyle: "none",
        },
        card: {
            backgroundColor: "#f8f9fa",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer",
            padding: "20px",
        },
        cardHover: {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
        title: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#000",
        },
        preview: {
            fontSize: "1rem",
            color: "#555",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
        },
    };

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const data = await getBlogs();
                if (data) setBlogs(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <h1 style={{ paddingLeft: "20px" }}>Posts</h1>

            <ul style={styles.container}>
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <Card blog={blog} key={blog._id} styles={styles} />
                    ))
                ) : (
                    <>No blogs found. Try refreshing.</>
                )}
            </ul>
        </>
    );
}

function Card({ blog, styles }) {
    const [hover, setHover] = useState(false);

    return (
        <li
            style={
                hover
                    ? { ...styles.card, ...styles.cardHover }
                    : styles.card
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link to={`/posts/${blog._id}`} style={{ textDecoration: "none" }}>
                <div style={styles.title}>{blog.title}</div>
                <div style={styles.preview}>
                    {blog.content || "No preview available."}
                </div>
            </Link>
        </li>
    );
}

export default BlogList;
