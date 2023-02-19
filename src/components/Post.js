import React, { useState, useEffect } from "react";
import Api from "./Api";

const Post = () => {
  const [data, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {data.map((data) => (
        <Api key={data.id} post={data} />
      ))}
    </div>
  );
};

export default Post;
