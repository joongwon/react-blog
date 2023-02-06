import { createContext, useContext, useState } from "react";

const BlogContext = createContext({});

function getSavedPosts() {
  const savedPosts = localStorage.getItem("postList");
  if (savedPosts) {
    return JSON.parse(savedPosts);
  }
  return [];
}

const postListInit = getSavedPosts();

export function BlogProvider({ children }) {
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
    <BlogContext.Provider value={{ postList, createPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
