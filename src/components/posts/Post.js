import React from 'react';
import axios from 'axios';

const Post = ({post, getPosts}) => {

    async function deletePost(){
        const deleted = await axios.delete(`http://localhost:5000/posts/:${post._id}`);
        console.log(deleted)
        // await getPosts();
        
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post._id}</h2>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

export default Post
