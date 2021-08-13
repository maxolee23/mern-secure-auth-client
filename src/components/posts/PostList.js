import React, {useState, useEffect} from 'react';
import Post from './Post';

const PostList = ({posts, getPosts}) => {

    return (
        <div className="mr-10">
            <h1 className="text-center text-2xl leading-6 font-medium text-gray-900 pt-5">All Posts</h1>
            <ul className="text-center pt-4">
                {
                    posts && posts.map((post, key) => (
                    <Post post={post} getPosts={getPosts}/>
                    ))
                }
            </ul>  
        </div>
    )
}

export default PostList
