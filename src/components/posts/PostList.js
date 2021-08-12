import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PostList = ({posts}) => {
    return (
        <div>
            <ul>
                {
                    posts && posts.map((post, id) => (
                    <li key={id}>{post.title}</li>
                    ))
                }
            </ul>  
        </div>
    )
}

export default PostList
