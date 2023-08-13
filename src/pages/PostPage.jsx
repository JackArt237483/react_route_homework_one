import { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [posts, setPosts] = useState([]);

 useEffect(()=> {
   axios.get('https://dummyjson.com/posts/')
    .then((res) => {
      console.log(res.data.posts)
      setPosts(res.data.posts)
    })
    .catch((error)=> console.error("This error bro",error))
 },[])

  return (
    <div>
      {posts.map(post => (
        <div
        className='posts'
        key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
