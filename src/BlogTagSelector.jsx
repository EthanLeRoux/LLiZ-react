import { useState } from "react";

function BlogTagSelector({ onTagChange }) {
    const predefinedTags = [
        { id: 1, name: "Grammar" },
        { id: 2, name: "Pronunciation" },
        { id: 3, name: "Culture" },
        { id: 4, name: "History" },
    ];

    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (event) => {
        const { value } = event.target;
        const newSelectedTags = [...selectedTags];
        if (newSelectedTags.includes(value)) {
            // If tag is already selected, remove it
            const index = newSelectedTags.indexOf(value);
            newSelectedTags.splice(index, 1);
        } else {
            // If tag is not selected, add it
            newSelectedTags.push(value);
        }

        setSelectedTags(newSelectedTags);
        onTagChange(newSelectedTags); // Pass the updated tags to BlogMaker
    };

    return (
        <div>
            <h3>Select Tags:</h3>
            {predefinedTags.map((tag) => (
                <div key={tag.id}>
                    <input
                        type="checkbox"
                        id={tag.id}
                        value={tag.name}
                        checked={selectedTags.includes(tag.name)}
                        onChange={handleTagChange}
                    />
                    <label htmlFor={tag.id}>{tag.name}</label>
                </div>
            ))}
        </div>
    );
}

export default BlogTagSelector;
