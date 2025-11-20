import React, { useState } from 'react';

const AddPostForm = ({ addPost }) => {
  const [postName, setPostName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postName) {
      addPost(postName);
      setPostName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        placeholder="Enter post name"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;