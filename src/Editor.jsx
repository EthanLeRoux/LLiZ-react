import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";

export const Editor = ({value, onChange}) => {

    return (
        <>
            <div className="text-editor">
                <EditorToolbar/>
                <ReactQuill
                    theme="snow"
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={onChange}
                />
            </div>

        </>

    );
};

export default Editor;