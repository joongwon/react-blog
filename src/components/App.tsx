import "./App.css";
import { Header } from "./Header";
import { PostListView } from "./PostListView";
import { PostCreateForm } from "./PostCreateForm";
import { useState } from "react";

function getSavedPostList() {
  const savedPostList = localStorage.getItem("postList");
  if (savedPostList) {
    return JSON.parse(savedPostList);
  }
  return [];
}

const postListInit = getSavedPostList();

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
    <div className="App">
      <main>
        <Header postCount={postList.length} />
        <PostCreateForm createPost={createPost} />
        <PostListView postList={postList} deletePost={deletePost} />
      </main>
    </div>
  );
}

export default App;
