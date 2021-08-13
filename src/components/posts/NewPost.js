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
        <form onSubmit={submitForm} className="w-2/5 mt-5 py-6 mb-5 border-2 rounded-sm border-solid border-black">
        <h1 className="text-center text-lg leading-6 font-medium text-gray-900">Create a New Post</h1>
      <label htmlFor="name" className="ml-px pl-4 block text-sm font-medium text-gray-700">
        Post Title
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="title"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
          placeholder="First Blog"
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
        />

<label htmlFor="name" className="ml-px mt-5 pl-4 block text-sm font-medium text-gray-700">
        Post Body
      </label>
      <div className="mt-1">
        <textarea
          type="text"
          name="body"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 my-8 rounded-full"
          placeholder="About my first blog..."
          onChange={(e) => setBody(e.target.value)} 
          value={body}
        />
      </div>
    </div>

        <button
        type="submit"
        className="inline-flex items-center ml-5 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-black bg-indigo-500 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
            Create Post
        </button>

    </form>
    )
}

export default NewPost
