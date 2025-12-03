import { useEffect, useState } from "react";
import getComments from "./GetComments";
import postComment from "./PostComment";

function CommentSection({ blogId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [replyTo, setReplyTo] = useState(null); // parent comment ID for replies

    useEffect(() => {
        async function fetchComments() {
            const data = await getComments(blogId);
            setComments(data);
        }
        fetchComments();
    }, [blogId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const author = JSON.parse(sessionStorage.getItem('username')) || "Anonymous";
        const authorId = JSON.parse(sessionStorage.getItem('userid')) || "Anonymous";

        const commentData = {
            blogId,
            author,
            authorId,
            content: newComment,
            parentId: replyTo, // null if top-level comment
        };

        const savedComment = await postComment(commentData);
        if (savedComment) {
            setComments([...comments, savedComment]);
            setNewComment("");
            setReplyTo(null);
        }
    };

    const renderComments = (parentId = null, level = 0) => {
    return comments
        .filter(c => String(c.parentId) === String(parentId))
        .map(c => {
            const parentComment = comments.find(p => String(p._id) === String(c.parentId));
            const replyingTo = parentComment ? parentComment.author : null;

            // Adjust background for nested levels
            const bgColor = level === 0 ? "#f5f0ff" : `rgba(205, 153, 255, ${0.1 + level * 0.1})`;

            return (
                <div key={c._id} style={{ ...styles.comment, marginLeft: level * 20, backgroundColor: bgColor }}>
                    <div style={styles.commentHeader}>
                        <strong>{c.author}</strong>
                        <button
                            style={styles.replyButton}
                            onClick={() => setReplyTo(c._id)}
                        >
                            Reply
                        </button>
                    </div>
                    {replyingTo && <div style={styles.replyInfo}>Replying to {replyingTo}</div>}
                    <div style={styles.commentContent}>{c.content}</div>
                    {renderComments(c._id, level + 1)}
                </div>
            );
        });
};


    const styles = {
        container: {
            padding: "20px",
            borderTop: "2px solid #ccc",
            marginTop: "20px",
            fontFamily: "Arial, sans-serif",
        },
        comment: {
            padding: "10px 15px",
            borderRadius: "10px",
            marginBottom: "10px",
            transition: "background 0.2s ease, box-shadow 0.2s ease",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        },
        commentHeader: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
        },
        replyButton: {
            backgroundColor: "blueviolet",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "2px 8px",
            fontSize: "0.8rem",
            cursor: "pointer",
        },
        commentContent: {
            fontSize: "0.95rem",
            color: "#333",
            lineHeight: "1.4",
        },
        textarea: {
            width: "100%",
            minHeight: "60px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            fontSize: "1rem",
        },
        postButton: {
            backgroundColor: "blueviolet",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "0.95rem",
        },
        replyInfo: {
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: "#555",
            marginBottom: "5px",
        }
    };

    return (
        <div style={styles.container}>
            <h3>Comments ({comments.length})</h3>
            {comments.length === 0 && <p>No comments yet. Be the first to comment!</p>}
            <form onSubmit={handleSubmit}>
                {replyTo && (
                    <p style={styles.replyInfo}>
                        Replying to {comments.find(c => c._id === replyTo)?.author}{" "}
                        <button type="button" onClick={() => setReplyTo(null)}>Cancel</button>
                    </p>
                )}
                <textarea
                    style={styles.textarea}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                />
                <button type="submit" style={styles.postButton}>
                    Post Comment
                </button>
            </form>

<br></br>
            {renderComments()} 
        </div>
    );
}

export default CommentSection;
