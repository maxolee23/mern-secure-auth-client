import React, {useState} from 'react';
import axios from 'axios';

const NewPost = ({getPosts}) => {
    const [title, setTitle] = useState("");

    async function submitForm(e) {
            e.preventDefault();
            try {
                const postData = {
                    title
                }
                await axios.post("http://localhost:5000/posts/", postData);
                await getPosts();
                setTitle("");
                
                // console.log(getPosts)
            } catch (error){
                console.log(error);
            }
        
        
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <button type="submit">Save new post</button>
        </form>
    )
}

export default NewPost
