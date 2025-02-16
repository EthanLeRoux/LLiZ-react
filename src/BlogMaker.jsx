import Editor from "./Editor.jsx";
import {useState} from "react";
import postBlog from "./PostBlog.js";
import BlogTagSelector from "./BlogTagSelector.jsx";

function BlogMaker() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]); // Store selected tags here
    let author = JSON.parse(sessionStorage.getItem('username'));

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (value) => {
        setContent(value);
    }

    const handleTagChange = (selectedTags) => {
        setTags(selectedTags); // Update tags when the user selects/deselects
    }

    const submitBlog = function (event) {
        event.preventDefault();
        console.log("Content: " + content);
        console.log("Title: " + title);
        console.log("Tags: ", tags); // Log the selected tags
        
        const blogData = {
            title: title,
            content: content,
            author: author,
            tags: tags // Add selected tags to the data object
        };

        // Sends blog content to API
        postBlog(blogData);

        // Clears the title and content input fields
        setTitle("");
        setContent("");
        setTags([]); // Reset selected tags after submission
    }

    // Button styles
    const buttonStyles = {
        color: "white",
        backgroundColor: "blueviolet",
        borderRadius: "5px",
        border: "none",
        padding: "5px"
    };

    return (
        <>
            <h1>Blog Maker</h1>
            <form onSubmit={submitBlog}>
                <p>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Title goes here"
                    />
                </p>

                <BlogTagSelector onTagChange={handleTagChange} />

                <Editor value={content} onChange={handleContentChange} />

                <p>
                    <button className="btnSubmitBlog" style={buttonStyles}>Submit</button>
                </p>
            </form>
        </>
    )
}

export default BlogMaker;
