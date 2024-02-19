import React, { useState } from 'react';
import Post from './post';
import AddPost from './addPost';

function App() {
  const [postList, setPostList] = useState([

    {
      postNumber: 0,
      text: 'A short psychic broke out of jail. She was a small medium at large.',
    },
    {
      postNumber: 1,
      text: 'What did the horse say after he tripped? Help! I\'ve fallen and I can\'t giddyup!',
    },
    {
      postNumber: 2,
      text: 'RIP boiling water, you will be mist.'
    }
    ]);

    
    const handleDeletePost = (id) => {
      let updatedPostList = postList.filter(post => post.postNumber !== id);

      setPostList(updatedPostList);
    }

    const [postId, setPostID] = useState(3);

    const handleAddPost = (newText) => {
      let newPost = {
        postNumber: postId,
        text: newText,
      }
      setPostList(postList => [...postList, newPost]);
      setPostID(postId + 1);
    };

    const posts = postList.map((post) => (
      <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost}/>
    ));

    return (
      <div>
        {posts}
        <AddPost onAdd={handleAddPost} />
      </div>
    )
};

export default App;