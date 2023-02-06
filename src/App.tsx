import { PostType } from "./types";
import styles from "./App.module.css";
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
  const [postList, _setPostList] = useState<PostType[]>(postListInit);

  function setPostList(postList: PostType[]) {
    localStorage.setItem("postList", JSON.stringify(postList));
    _setPostList(postList);
  }

  function deletePost(id: number) {
    setPostList(postList.filter((post) => post.id !== id));
  }

  function createPost(title: string, content: string) {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPostList([newPost, ...postList]);
  }

  return (
    <div className={styles.app}>
      <main>
        <Header postCount={postList.length} />
        <PostCreate createPost={createPost} />
        <PostList postList={postList} deletePost={deletePost} />
      </main>
    </div>
  );
}

export default App;
