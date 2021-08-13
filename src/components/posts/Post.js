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
        <li className="border-2 rounded border-solid border-grey-600 mt-3">
            <h4 className="text-center text-md leading-6 font-semibold text-gray-700">{post.title}</h4>
            <p className="text-center text-sm leading-6 font-light text-black-700 px-5">{post.body}</p>       
            <button
            className="inline-flex items-center my-5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-black-100 bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={deletePost}
            >
            Delete Post
            </button>
        </li>
    )
}

export default Post
