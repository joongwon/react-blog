import "./App.css";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { PostCreate } from "./PostCreate";
import { useState } from "react";

function getSavedPosts() {
  const savedPosts = localStorage.getItem("postList");
  if (savedPosts) {
    return JSON.parse(savedPosts);
  }
  return [];
}

const postListInit = getSavedPosts();

function App() {
  const [postList, _setPostList] = useState(postListInit);
  function setPostList(postList) {
    localStorage.setItem("postList", JSON.stringify(postList));
    _setPostList(postList);
  }
  function deletePost(id) {
    setPostList(postList.filter((post) => post.id !== id));
  }
  function createPost(title, content) {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPostList([newPost, ...postList]);
  }
  return (
    <div className="app">
      <main>
        <Header postCount={postList.length} />
        <PostCreate createPost={createPost} />
        <PostList postList={postList} deletePost={deletePost} />
      </main>
    </div>
  );
}

export default App;
