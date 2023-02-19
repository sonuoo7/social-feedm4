import React, { useState } from 'react'

const Likes = (post) => {
    const [likes, setLikes] = useState(0);
     const handleLike = () => {
       setLikes(likes + 1);
     };

  return (
    <div className='App'>
      <img
        className="image"
        src={`https://picsum.photos/200?random=${post.id}`}
        alt={`"Post"${post.id}`}
      />
      <p className="likes">Likes :{likes}</p>
      <button className="btn" onClick={handleLike}>
        Like Post
      </button>
    </div>
  );
}

export default Likes