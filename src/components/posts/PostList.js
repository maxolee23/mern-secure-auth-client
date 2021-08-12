import React, {useState, useEffect} from 'react';
import Post from './Post';

const PostList = ({posts, getPosts}) => {

    return (
        <div>
            <ul>
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
