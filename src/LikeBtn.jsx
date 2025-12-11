import { useEffect, useState } from "react";

function LikeDislike({ blogId, userId,authorId }) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [userReaction, setUserReaction] = useState(null); // 'like' | 'dislike' | null

    useEffect(() => {
        async function fetchBlog() {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${blogId}`);
            const data = await response.json();
            
            if(data.likes){
                setLikes(data.likes.length);
            }
            if(data.dislikes){
                setDislikes(data.dislikes.length);
            }
        }

        fetchBlog();
    }, [blogId]);
    

    const toggleReaction = async (type) => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bloglikes/${blogId}/${type}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId,authorId }),
        });
        const data = await res.json();
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setUserReaction(prev => (prev === type ? null : type));
    };

    return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
                style={{
                    backgroundColor: userReaction === "like" ? "blueviolet" : "#f0f0f0",
                    color: userReaction === "like" ? "#fff" : "#000",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}
                onClick={() => toggleReaction("like")}
            >
                👍 {likes}
            </button>

            <button
                style={{
                    backgroundColor: userReaction === "dislike" ? "red" : "#f0f0f0",
                    color: userReaction === "dislike" ? "#fff" : "#000",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}
                onClick={() => toggleReaction("dislike")}
            >
                👎 {dislikes}
            </button>
        </div>
    );
}

export default LikeDislike;
