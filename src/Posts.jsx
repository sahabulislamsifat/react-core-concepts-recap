import { useEffect, useState } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h3>Posts:{posts.length}</h3>
      {posts.map((post) => (
        <Post></Post>
      ))}
    </div>
  );
}
