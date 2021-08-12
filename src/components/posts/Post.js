import React from 'react';
import axios from 'axios';

const Post = ({post, getPosts}) => {

    // async function deletePost(post){
    //     // const deleted = await axios.delete(`http://localhost:5000/posts/${post._id}`);
    //     console.log(post)
    //     // await getPosts();
        
    // }
    const deletePost = async () => {
        // console.log(post._id)
        await axios.delete(`http://localhost:5000/posts/${post._id}`);
        await getPosts();
    }
    return (
        <li>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={deletePost}>Delete</button>
        </li>
    )
}

export default Post
