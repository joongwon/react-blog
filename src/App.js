import styles from "./App.module.css";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { PostCreate } from "./PostCreate";
import { useState } from "react";

function App() {
  const [postList, setPostList] = useState([
    { id: 1, title: "리액트", content: "리액트는 너무 재밌다!" },
    { id: 2, title: "오늘의 영상", content: "NYC A-Train Sax Battle" },
    { id: 3, title: "첫번째 글", content: "안녕하세요~~" },
  ]);
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
