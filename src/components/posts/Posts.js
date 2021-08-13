import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NewPost from './NewPost'
import PostList from './PostList';

const Posts = () => {

    const [posts, setPosts] = useState();

    async function getPosts() {
        const res = await axios.get("http://localhost:5000/posts/");
        setPosts(res.data);
    }

    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div className="flex justify-between">
        <NewPost getPosts={getPosts}/>
        <PostList posts={posts} getPosts={getPosts}/>
        </div>
    )
}

export default Posts
