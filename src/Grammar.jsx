import {useEffect, useState} from "react";
import getBlogs from "./GetBlogs.js";
import { Card, Row, Col, Button } from 'react-bootstrap';

function Grammar(){
    const[blogs,setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            try{
                const data = await getBlogs();
                setBlogs(data);
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        fetchBlogs();
    },[]);

    if (loading) return <div>Loading...</div>;  // Show loading message
    if (error) return <div>Error: {error}</div>;  // Show error message if any

    return (
        <>
            <div style={{padding: 20}}>
                <h1>Grammar Lessons</h1>
                <Row>
                    {blogs.map((blog) => (
                        <Col key={blog.id} md={4} className="mb-4">
                            <Card>
                                {blog.imageUrl && <Card.Img variant="top" src={blog.imageUrl} alt={blog.title}/>}
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>{blog.content.slice(0, 100)}...</Card.Text>
                                    <Button variant="primary" href={`/blogs/${blog.id}`}>Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </>
    )
}

export default Grammar;