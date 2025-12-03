import Editor from "./Editor.jsx";
import { useState } from "react";
import postBlog from "./PostBlog.js";
import BlogTagSelector from "./BlogTagSelector.jsx";

function BlogMaker() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    let author = JSON.parse(sessionStorage.getItem('username'));
    let authorid = JSON.parse(sessionStorage.getItem('userid'));

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleContentChange = (value) => setContent(value);
    const handleTagChange = (selectedTags) => setTags(selectedTags);

    const submitBlog = (event) => {
        event.preventDefault();
        const blogData = { title, content, author, tags,authorid };
        console.log(blogData)
        postBlog(blogData);
        setTitle("");
        setContent("");
        setTags([]);
    };

    // CSS-in-JS styles
    const styles = {
        container: {
            maxWidth: "900px",
            margin: "20px auto",
            padding: "30px 20px", // Added more padding
            backgroundColor: "#f9f9ff",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
        },
        input: {
            width: "100%",
            padding: "12px 16px", // More internal spacing
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        },
        inputFocus: {
            borderColor: "blueviolet",
            boxShadow: "0 0 5px rgba(138, 43, 226, 0.5)",
        },
        button: {
            color: "white",
            backgroundColor: "blueviolet",
            borderRadius: "8px",
            border: "none",
            padding: "12px 25px", // Larger button padding
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            alignSelf: "flex-start", // Button doesn’t stretch full width
        },
        buttonHover: {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 10px rgba(138, 43, 226, 0.4)",
        },
    };

    const [hovered, setHovered] = useState(false);

    return (
        <div style={styles.container}>
            <h1>Blog Maker</h1>
            <form style={{ display: "flex", flexDirection: "column", gap: "25px" }} onSubmit={submitBlog}>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title goes here"
                    style={{ ...styles.input, ...(hovered ? styles.inputFocus : {}) }}
                    onFocus={() => setHovered(true)}
                    onBlur={() => setHovered(false)}
                />

                <BlogTagSelector onTagChange={handleTagChange} />

                <Editor value={content} onChange={handleContentChange} />

                <button
                    type="submit"
                    style={{ ...styles.button, ...(hovered ? styles.buttonHover : {}) }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BlogMaker;
