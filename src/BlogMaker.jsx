import Editor from "./Editor.jsx";
import {useState} from "react";
import postBlog from "./PostBlog.js";

function BlogMaker() {
    const[title,setTitle] = useState("");
    const [content, setContent] = useState("");
    let author = JSON.parse(sessionStorage.getItem('username'));

    const handleChange = function(event) {
        setContent(event.target.value);
        console.log(content);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (value) => {
        setContent(value);
    }
    const submitBlog = function (event){
        event.preventDefault();
        console.log("Content: "+content);
        console.log("Title: "+title);

        const blogData={
            title:title,
            content:content,
           author: author
        };

        //sends blog content to api
        postBlog(blogData);

        // Clears the title input field
        setTitle("");
        setContent("");
    }

    //button styles
    const buttonStyles = {
        color: "white",
        backgroundColor: "blueviolet",
        borderRadius: "5px",
        border: "none",
        padding:"5px"
    };

    return (
        <>
            <h1>Blog Maker</h1>
            <form onSubmit={submitBlog}>
                <p>
                    <input type={"text"} value={title} onChange={handleTitleChange} placeholder={"Title goes here"}/>
                </p>

                    <Editor value={content} onChange={handleContentChange}/>

                <p>
                    <button className="btnSubmitBlog" style={buttonStyles}>Submit</button>
                </p>


            </form>


        </>
    )
}

export default BlogMaker;