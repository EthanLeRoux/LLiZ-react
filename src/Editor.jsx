import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";

export const Editor = () => {
    const [state, setState] = React.useState({ value: null });
    const handleChange = value => {
        setState({ value });
        console.log(state);
    };

    const mystyle = {
        color: "white",
        backgroundColor: "blueviolet",
        borderRadius: "5px",
        border: "none",
        padding:"5px"
    };

    const submitBlog = function (blog){

    }

    return (
        <>
            <div className="text-editor">
                <EditorToolbar/>
                <ReactQuill
                    theme="snow"
                    value={state.value}
                    onChange={handleChange}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    formats={formats}
                />
            </div>
            <br/>
            <button className="btnSubmitBlog" onClick={() => submitBlog(state)} style={mystyle}>Submit</button>
        </>

    );
};

export default Editor;