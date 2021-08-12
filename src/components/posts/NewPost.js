import React, {useState} from 'react';
import axios from 'axios';

const NewPost = ({getPosts}) => {
    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")

    async function submitForm(e) {
            e.preventDefault();
            try {
                const postData = {title, body}
                await axios.post("http://localhost:5000/posts/", postData);
                await getPosts();
                setTitle("");
                setBody("")
                
                // console.log(getPosts)
            } catch (error){
                console.log(error);
            }
        
        
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <textarea type="text" placeholder="body" onChange={(e) => setBody(e.target.value)} value={body} />
            <button type="submit">Add Post</button>
        </form>
    )
}

export default NewPost
